const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(new AppError("No document found with that ID", 404))
      );
    }
    res.status(204).json({
      status: "Success",
      data: null,
    });
  });
exports.deleteAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.deleteMany();
    res.status(204).json({
      data: null,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newJob = await Model.create(req.body);
    if (!newJob) {
      return next(new AppError("Could not create job", 404));
    }
    res.status(200).json({
      status: "Success",
      data: {
        newJob,
      },
    });
  });

exports.updateOne = (Module) =>
  catchAsync(async (req, res, next) => {
    const doc = await Module.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that id", 404));
    }

    res.status(200).json({
      status: "Successful",
      data: {
        doc,
      },
    });
  });

exports.getOne = (Module) =>
  catchAsync(async (req, res, next) => {
    const doc = await Module.findById(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that id", 404));
    }

    res.status(200).json({
      status: "Succesful",
      data: {
        doc,
      },
    });
  });

exports.getAll = (Module) =>
  catchAsync(async (req, res) => {
    const docs = await Module.find();
    res.status(200).json({
      result: docs.length,
      data: {
        docs,
      },
    });
  });
