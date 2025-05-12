const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A task must have a title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "A task must have a description"],
      trim: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    status: {
      type: String,
      enum: ["pending", "completed", "in-progress"],
      default: "pending",
    },
    dueDate: {
      type: Date,
      required: [true, "A task must have a due date"],
    },
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      required: [true, "A task must have members"],
    },
    todos: {
      type: [String],
      required: [true, "A task must have todos"],
      completed: { type: Boolean, default: false },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "A task must belong to a user"],
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
