const express = require('express');
const config = require('config');
const jwtSecret = config.get('jwtSecret');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const authRouter = express.Router();

//@Route        GET api/auth
//@desc         Get logged in user
//@access       Private

authRouter.get('/', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@Route        POST api/auth
//@desc         Auth user & Get Token
//@access       Public

authRouter.post(
  '/',
  [
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Enter a password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        jwtSecret,
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  }
);

module.exports = authRouter;
