const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post("/", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 300,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token, role });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
