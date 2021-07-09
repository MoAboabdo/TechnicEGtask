const express = require("express");

const sequelize = require("./util/database");
const User = require("./models/user");

const app = express();

app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/tasks", require("./routes/task"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
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
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
