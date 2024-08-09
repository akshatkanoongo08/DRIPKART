const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust the path to your user model

const authMiddleware = async (req, res, next) => {
  console.log('Header', req.header('test'))
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  // console.log("ltoken",token) 
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.user = user; // Attach user to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
