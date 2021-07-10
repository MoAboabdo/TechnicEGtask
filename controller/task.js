const Task = require("../models/task");

const TaskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.findAll({});
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  createTask: async (req, res) => {
    const { title, description, price, status, done, paid } = req.body;

    try {
      const task = await Task.create({
        title,
        description,
        price,
        status,
        done,
        paid,
        userId: req.user.id,
      });
      res.json(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getTodoTask: async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { status: "Todo" } });
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getInProgressTask: async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { status: "Inprogress" } });
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getTestingTask: async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { status: "Testing" } });
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getPaidTask: async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { status: "Paid" } });
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getDoneTask: async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { done: true } });
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getNotDoneTask: async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { done: true } });
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  getTask: async (req, res) => {
    try {
      const oneTask = await Task.findOne({ where: { id: req.params.id } });
      res.json(oneTask);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  updateTask: async (req, res) => {
    let { title, description, price, status, done, paid } = req.body;

    try {
      const task = await Task.findOne({ where: { id: req.params.id } });

      if (!task) {
        res.status(400).json({ msg: "Task Not found" });
      }
      task.update({
        title,
        description,
        price,
        status,
        done,
        paid,
      });
      res.status(200).json({ msg: "Updated Successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = TaskController;
