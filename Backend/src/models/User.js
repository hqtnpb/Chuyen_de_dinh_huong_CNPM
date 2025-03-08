const mongoose = require("mongoose");

let profile_imgs_name_list = [
    "Garfield",
    "Tinkerbell",
    "Annie",
    "Loki",
    "Cleo",
    "Angel",
    "Bob",
    "Mia",
    "Coco",
    "Gracie",
    "Bear",
    "Bella",
    "Abby",
    "Harley",
    "Cali",
    "Leo",
    "Luna",
    "Jack",
    "Felix",
    "Kiki",
];
let profile_imgs_collections_list = [
    "notionists-neutral",
    "adventurer-neutral",
    "fun-emoji",
];

const userSchema = new mongoose.Schema(
    {
        personal_info: {
            username: {
                type: String,
                minLength: 3,
                unique: true,
            },
            email: {
                type: String,
                required: true,
                lowercase: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
                minLength: 8,
            },
            admin: {
                type: Boolean,
                default: false,
            },
            bio: {
                type: String,
                maxlength: [200, "Bio should not be more than 200"],
                default: "",
            },
            profile_img: {
                type: String,
                default: () => {
                    return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`;
                },
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
