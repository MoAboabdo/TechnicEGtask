const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const config = require("config");
const User = require("../models/User");
const auth = require("../middleware/auth");
const {
  generateRefreshToken,
  generateToken,
} = require("../util/generateToken");

let refreshTokens = [];

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  let isMatch;
  try {
    let user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    password === user.password ? (isMatch = true) : (isMatch = false);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    let accessToken = generateToken(payload);
    let refreshToken = generateRefreshToken(payload);
    refreshTokens.push(refreshToken);

    res.json({
      token: accessToken,
      refreshToken: refreshToken,
      role: user.role,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/refreshToken", (req, res, next) => {
  const refreshToken = req.body.token;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res
      .status(403)
      .json({ messgae: "Refresh Token not found, login again " });
  }
  jwt.verify(refreshToken, "refreshToken", (err, user) => {
    if (!err) {
      const accessToken = jwt.sign({ id: user.id }, "accessToken", {
        expiresIn: "300",
      });
      return res.status(201).json({ success: true, accessToken });
    } else {
      return res
        .status(403)
        .json({ success: false, message: "Invalid refresh token" });
    }
  });
});

module.exports = router;
