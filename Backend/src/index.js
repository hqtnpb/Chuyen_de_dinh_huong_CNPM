const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const uploadRoute = require("./routes/upload");
const createBlogRoute = require("./routes/createBlog");
const renderBlogsRoute = require("./routes/renderBlogs");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (token === null) {
        return res.sendStatus(401).json({ error: "No access token" });
    }

    jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Token is not valid" });
        }

        req.user = user.id;
        next();
    });
};

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            autoIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Thoát chương trình nếu không kết nối được
    }
};

connectDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/create", verifyJWT, createBlogRoute);
app.use("/api/render", renderBlogsRoute);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
