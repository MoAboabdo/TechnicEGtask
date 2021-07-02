const Sequelize = require("sequelize");

const sequelize = new Sequelize("freelancerAndClient", "root", "tot3n5amon", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
