const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "accessToken", {
    expiresIn: 5 * 60,
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, "refreshToken", {
    expiresIn: "1d",
  });
};

module.exports = { generateToken, generateRefreshToken };
