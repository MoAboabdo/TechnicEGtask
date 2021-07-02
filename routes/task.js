const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const taskController = require("../controller/task");
// @route     POST api/tasks
// @desc      Add new task
// @access    Private
router.post("/", auth, taskController.postAddTask);
// @route     GET api/tasks
// @desc      Get All tasks
// @access    Private
router.get("/", auth, taskController.getTasks);

module.exports = router;
