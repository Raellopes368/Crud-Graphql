const jwt = require("jsonwebtoken");

module.exports = function generateToken(id) {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign({ id }, secretKey);
  return token;
};
