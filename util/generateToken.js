const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "accessToken", {
    expiresIn: "300",
  });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, "refreshToken", {
    expiresIn: "1d",
  });
};

module.exports = { generateToken, generateRefreshToken };
