const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const taskController = require("../controller/task");

router.get("/tasks", auth, taskController.getAllTasks);
router.post("/task/new", auth, taskController.createTask);
router.get("/task/:id", auth, taskController.getTask);
router.get("/tasks/todo", auth, taskController.getTodoTask);
router.get("/tasks/inProgress", auth, taskController.getInProgressTask);

router.get("/tasks/testing", auth, taskController.getTestingTask);
router.get("/tasks/paid", auth, taskController.getPaidTask);
router.get("/tasks/done'", auth, taskController.getTestingTask);
router.get("/tasks/notDone'", auth, taskController.getTestingTask);
router.post("/tasks/:id/update", auth, taskController.updateTask);

module.exports = router;
