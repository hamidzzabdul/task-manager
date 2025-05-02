const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/TaskRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

module.exports = app;
