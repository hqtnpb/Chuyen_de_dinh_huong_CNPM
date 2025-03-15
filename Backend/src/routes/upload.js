const uploadController = require("../controllers/uploadController");
const router = require("express").Router();

//Upload image URL
router.get("/get-upload-url", uploadController.getUploadURL);
module.exports = router;
