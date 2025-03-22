const User = require("../models/User");

const userController = {
    getProfile: (req, res) => {
        let { username } = req.body;

        User.findOne({ "personal_info.username": username })
            .select("-personal_info.password -google_auth -updatedAt -blogs")
            .then((user) => {
                return res.status(200).json(user);
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    },
};

module.exports = userController;
