const express = require("express");

const sequelize = require("./util/database");
const User = require("./models/user");

const app = express();

app.use(express.urlencoded({ extended: false }));

// Define Routes
app.use("/api/tasks", require("./routes/task"));
app.use("/api/auth", require("./routes/auth"));

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(2);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        email: "freelancer@freelancer.com",
        password: "123456789",
        role: "freelancer",
      });
    }
    return user;
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
