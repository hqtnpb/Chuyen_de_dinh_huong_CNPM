const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
let emailRegex =
    /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const formatDataToSend = (user) => {
    const accessToken = jwt.sign(
        { id: user._id },
        process.env.SECRET_ACCESS_KEY
    );
    return {
        accessToken,
        profile_img: user.personal_info.profile_img,
        username: user.personal_info.username,
    };
};

const generatedUsername = async (email) => {
    let username = email.split("@")[0];

    let usernameExists = await User.exists({
        "personal_info.username": username,
    });

    if (usernameExists) {
        username += nanoid(3);
    }

    return username;
};
const authController = {
    // Register
    registerUser: async (req, res) => {
        let { email, password } = req.body;

        let username = await generatedUsername(email);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        try {
            if (!email.length) {
                return res.status(403).json("Email is required");
            }

            if (!emailRegex.test(email)) {
                return res.status(403).json("Email is not valid");
            }

            if (!passwordRegex.test(password)) {
                return res
                    .status(403)
                    .json(
                        "Password must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                    );
            }
            //create new user
            const newUser = new User({
                personal_info: {
                    username: username,
                    email: email,
                    password: hashedPassword,
                },
            });

            //save user and respond
            const user = await newUser.save();
            res.status(200).json(formatDataToSend(user));
        } catch (error) {
            if (error.code === 11000) {
                return res.status(500).json({ error: "Email already exist" });
            }

            return res.status(500).json(error);
        }
    },
    // Login
    loginUser: async (req, res) => {
        let { email, password } = req.body;

        try {
            const user = await User.findOne({ "personal_info.email": email });
            console.log(user);

            if (!user) {
                return res.status(400).json({ error: "Email is not found" });
            }
            const validPassword = await bcrypt.compare(
                password,
                user.personal_info.password
            );
            if (!validPassword) {
                return res
                    .status(400)
                    .json({ error: "Email or password is incorrect" });
            }

            return res.status(200).json(formatDataToSend(user));
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = authController;
