const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const hbs = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "assets")));

//Http logger
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template engine
app.engine(
    "hbs",
    hbs.engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
