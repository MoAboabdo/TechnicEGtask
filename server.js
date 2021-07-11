const express = require("express");
const cors = require('cors') // This is new
const dotenv = require ('dotenv')


const sequelize = require("./util/database");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors()) // This is new
dotenv.config()

// Define Routes
app.use("/api", require("./routes/task"));
app.use("/api/auth", require("./routes/auth"));

Task.belongsTo(User, { constrains: true, onDelete: "CASCADE" });
User.hasMany(Task);

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
