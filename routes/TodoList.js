const express = require("express");
const todoListController = require("../controller/TodoList");
const router = express.Router();

// GET /todolist/list
router.get("/list", todoListController.getToDoList);

// POST /todolist/create
router.post("/create", todoListController.createATask);

// POST /todolist/delete
router.post("/delete", todoListController.deleteTask);

// POST /todolist/update
router.post("/update", todoListController.updateTask);

module.exports = router;
