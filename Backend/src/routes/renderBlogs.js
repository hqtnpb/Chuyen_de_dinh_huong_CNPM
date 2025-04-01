const renderBlogsController = require("../controllers/renderBlogsController");
const router = require("express").Router();
const verifyJWT = require("../middleWare/authMiddleWare");
router.post("/latest-blog", renderBlogsController.renderBlogs);

router.get("/trending-blog", renderBlogsController.renderTrendingBlogs);

router.post("/search-blogs", renderBlogsController.searchBlog);

router.post(
    "/all-latest-blogs-count",
    renderBlogsController.allLatestBlogsCount
);
router.post("/search-blogs-count", renderBlogsController.searchBlogsCount);

router.post("/get-blog-details", renderBlogsController.getBlogDetails);

router.post("/search-users", renderBlogsController.searchUser);

router.post("/like-blog", verifyJWT, renderBlogsController.likeBlog);

router.post("/liked-by-user", verifyJWT, renderBlogsController.likedByUser);

router.post(
    "/user-written-blogs",
    verifyJWT,
    renderBlogsController.userWrittenBlogs
);

router.post(
    "/user-written-blogs-count",
    verifyJWT,
    renderBlogsController.userWrittenBlogsCount
);
router.post("/delete-blog", verifyJWT, renderBlogsController.deleteBlog);

module.exports = router;
