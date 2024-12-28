const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided" });
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
