const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const admin = require("firebase-admin");
const serviceAccountKey = require("../../blog-website-e0d5a-firebase-adminsdk-fbsvc-d2d431c9f0.json");

const { getAuth } = require("firebase-admin/auth");

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

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
});

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
    // Signin
    loginUser: async (req, res) => {
        let { email, password } = req.body;

        try {
            const user = await User.findOne({ "personal_info.email": email });

            if (!user) {
                return res.status(400).json({ error: "Email is not found" });
            }

            if (!user.google_auth) {
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
            } else {
                return res.status(403).json({
                    error: "This email was signed up with google. Please sign in with google",
                });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Signin with Google
    signinWithGoogle: async (req, res) => {
        let { accessToken } = req.body;

        getAuth()
            .verifyIdToken(accessToken)
            .then(async (decodedUser) => {
                let { email, name, picture } = decodedUser;

                picture = picture.replace("s96-c", "s384-c");

                let user = await User.findOne({ "personal_info.email": email })
                    .select(
                        "personal_info.username personal_info.profile_img google_auth"
                    )
                    .then((u) => {
                        return u || null;
                    })
                    .catch((error) => {
                        return res.status(500).json({ error: error.message });
                    });
                if (user) {
                    if (!user.google_auth) {
                        return res.status(403).json({
                            error: "This email was signed up without google. Please sign in with email and password",
                        });
                    }
                } else {
                    let username = await generatedUsername(email);

                    user = new User({
                        personal_info: {
                            username: username,
                            email: email,
                        },
                        google_auth: true,
                    });

                    await user
                        .save()
                        .then((u) => {
                            user = u;
                        })
                        .catch((error) => {
                            return res
                                .status(500)
                                .json({ error: error.message });
                        });
                }
                return res.status(200).json(formatDataToSend(user));
            })
            .catch((error) => {
                return res
                    .status(500)
                    .json({ error: "Fail to authenticate with google" });
            });
    },
};

module.exports = authController;
