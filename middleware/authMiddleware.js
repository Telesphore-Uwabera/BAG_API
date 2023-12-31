const jwt = require('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTg0MDM1NTcsImV4cCI6MTY5ODQwMzU4NywianRpIjoiand0X25vbmNlIn0.Gk2mfdElpDflYwl71Bscl1W_quKpQB972kt-rG8SM-A');
const JWT_SECRET = '91073@Tecy';
const User = require('../models/User');

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Find the user associated with the token
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    // Attach the user object to the request for further use
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticateUser;
