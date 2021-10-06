const todoList = [{ name: "visit doctor", time: "14:30", isDone: false }];
const todoListModule = require("../models/TodoList");

exports.getToDoList = async (req, res, next) => {
  try {
    const { rows } = await todoListModule.getAll();
    res.status(200).json({
      todoList: rows,
    });
  } catch (err) {
    res.status(500).json({
      todoList: null,
      message: "Get task list unsuccessfully",
    });
  }
};

exports.createATask = async (req, res, next) => {
  const name = req.body.name;
  try {
    await todoListModule.add(name);
    res.status(201).json({
      message: "Task created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Task created unsuccessfully",
    });
  }
};

exports.deleteTask = async (req, res, next) => {
  const taskID = req.body.taskID;
  try {
    await todoListModule.delete(taskID);
    res.status(201).json({
      message: "Task deleted successfully",
    });
  } catch (err) {
    res.status(201).json({
      message: "Task deleted unsuccessfully",
    });
  }
};

exports.updateTask = async (req, res, next) => {
  const taskID = req.body.taskID;
  const taskIsDone = req.body.taskIsDone;
  try {
    await todoListModule.update(taskID, taskIsDone);
    res.status(201).json({
      message: "Task updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Task updated unsuccessfully",
    });
  }
};
