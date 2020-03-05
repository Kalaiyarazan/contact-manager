const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  //Get token from header

  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'No token, Authorization Denied!' });
  }

  try {
    const decode = jwt.verify(token, config.get('jwtSecret'));
    req.user = decode.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: 'Token is invalid' });
  }
};

module.exports = auth;
