const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
    // Register
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            //create new user
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });

            //save user and respond
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Login
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if(!user) {
                return res.status(400).json("Username is not found");
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if(!validPassword) {
                return res.status(400).json("Password is not correct");
            }
            if(user && validPassword) {
                return res.status(200).json(user);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = authController;
