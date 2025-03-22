const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/get-profile", userController.getProfile);
module.exports = router;