const Task = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.getAllTasks = factory.getAll(Task);
exports.getTask = factory.getOne(Task);
exports.updateTask = factory.updateOne(Task);
exports.deleteAllTasks = factory.deleteAll(Task);

exports.CreateTask = catchAsync(async (req, res, next) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    todos: req.body.todos,
    members: req.body.members,
    user: req.user._id,
  });
  res.status(200).json({
    data: { task },
    status: "success",
  });
});
