exports.postAddTask = async (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  try {
    const tasks = await req.user.createTask({
      title: title,
      price: price,
      description: description,
    });
    console.log("Created Task");
    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await req.user.getTasks();

    if (!tasks) {
      res.status(400).json({ msg: "Tasks Not Found!" });
    }

    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
};
