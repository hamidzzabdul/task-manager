const express = require("express");

const authController = require("../controllers/authcontroller");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.use(authController.protect);
router.route("/me", userController.updateMe);

module.exports = router;
