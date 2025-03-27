const router = require("express").Router();
const commentController = require("../controllers/commentController");
const verifyJWT = require("../middleWare/authMiddleWare");

router.post("/add-comment", verifyJWT, commentController.addComment);
router.post("/get-blog-comments", commentController.getBlogComments);
router.post("/get-replies", commentController.getReplies);
router.post("/delete-comment", verifyJWT, commentController.deleteComment);

module.exports = router;
