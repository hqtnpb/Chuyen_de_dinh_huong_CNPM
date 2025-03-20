const renderBlogsController = require("../controllers/renderBlogsController");
const router = require("express").Router();

router.post("/latest-blog", renderBlogsController.renderBlogs);

router.get("/trending-blog", renderBlogsController.renderTrendingBlogs);

router.post("/search-blogs", renderBlogsController.searchBlog);

router.post(
    "/all-latest-blogs-count",
    renderBlogsController.allLatestBlogsCount
);
router.post("/search-blogs-count", renderBlogsController.searchBlogsCount);
router.post("/search-users", renderBlogsController.searchUser);   
module.exports = router;
