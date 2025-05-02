const express = require("express");
const TaskController = require("../controllers/TaskController");
const authController = require("../controllers/authcontroller");
const Router = express.Router();

Router.route("/")
  .get(TaskController.getAllTasks)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    TaskController.CreateTask
  );

module.exports = Router;
