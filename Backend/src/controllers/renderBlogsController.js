const Blog = require("../models/Blog");
const User = require("../models/User");
const renderBlogsController = {
    renderBlogs: (req, res) => {
        let { page } = req.body;
        let maxLimit = 3;
        Blog.find({ draft: false })
            .populate(
                "author",
                "personal_info.profile_img personal_info.username -_id"
            )
            .sort({ publishedAt: -1 })
            .select("blog_id title desc banner activity tags publishedAt -_id")
            .skip((page - 1) * maxLimit)
            .limit(maxLimit)
            .then((blogs) => {
                return res.status(200).json({ blogs });
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    },

    renderTrendingBlogs: (req, res) => {
        Blog.find({ draft: false })
            .populate(
                "author",
                "personal_info.profile_img personal_info.username -_id"
            )
            .sort({
                "activity.total_reads": -1,
                "activity.total_likes": -1,
                publishedAt: -1,
            })
            .select("blog_id title desc banner publishedAt activity -_id")
            .limit(5)
            .then((blogs) => {
                return res.status(200).json({ blogs });
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    },

    searchBlog: (req, res) => {
        let { tag, page, author, query } = req.body;

        let findQuery;
        if (tag) {
            findQuery = {
                tags: tag,
                draft: false,
            };
        } else if (query) {
            findQuery = { draft: false, title: new RegExp(query, "i") };
        } else if (author) {
            findQuery = { author: author, draft: false };
        }
        let maxLimit = 1;

        Blog.find(findQuery)
            .populate(
                "author",
                "personal_info.profile_img personal_info.username -_id"
            )
            .sort({ publishedAt: -1 })
            .select("blog_id title desc banner activity tags publishedAt -_id")
            .skip((page - 1) * maxLimit)
            .limit(maxLimit)
            .then((blogs) => {
                return res.status(200).json({ blogs });
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    },

    searchUser: (req, res) => {
        let { query } = req.body;

        User.find({ "personal_info.username": new RegExp(query, "i") })
            .limit(50)
            .select("personal_info.username personal_info.profile_img -_id")
            .then((users) => {
                return res.status(200).json({ users });
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    },
    allLatestBlogsCount: (req, res) => {
        Blog.countDocuments({ draft: false })
            .then((count) => {
                return res.status(200).json({ totalDocs: count });
            })
            .catch((error) => {
                console.log(error.message);
                return res.status(500).json({ error: error.message });
            });
    },

    searchBlogsCount: (req, res) => {
        let { tag, author, query } = req.body;
        let findQuery;
        if (tag) {
            findQuery = {
                tags: tag,
                draft: false,
            };
        } else if (query) {
            findQuery = { draft: false, title: new RegExp(query, "i") };
        } else if (author) {
            findQuery = { author: author, draft: false };
        }
        Blog.countDocuments(findQuery)
            .then((count) => {
                return res.status(200).json({ totalDocs: count });
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    },
};
module.exports = renderBlogsController;
