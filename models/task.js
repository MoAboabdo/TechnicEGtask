const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  status: Sequelize.STRING,
  done: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
  paid: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
});

module.exports = Task;
