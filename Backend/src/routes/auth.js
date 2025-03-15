const authController = require("../controllers/authController");

const router = require("express").Router();
//register
router.post("/signup", authController.registerUser);

//login
router.post("/signin", authController.loginUser);

//Login with Google
router.post("/google-auth", authController.signinWithGoogle);

module.exports = router;
