const createBlog = require("../controllers/createBlogController");
const router = require("express").Router();

router.post("/create-blog", createBlog.createBlog);

module.exports = router;
