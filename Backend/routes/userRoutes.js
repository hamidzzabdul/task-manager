const express = require("express");

const authController = require("../controllers/authcontroller");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/").get(
  authController.protect,
  // authController.restrictTo("admin"),
  userController.getAllUsers
);

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.use(authController.protect);
router.route("/me").post(userController.updateMe);

module.exports = router;
