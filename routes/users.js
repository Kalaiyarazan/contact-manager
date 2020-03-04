const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const User = require('../models/User');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

//@Route        POST api/users
//@desc         Register a user
//@access       Public

userRouter.post(
  '/',
  [
    check('name', 'Please enter Name')
      .not()
      .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password length should be min 6 ').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exist' });
      }

      user = new User({
        name,
        email,
        password
      });

      //Hash the password before save to DB
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      //jwt sign accepts Payload, Secret, Optional(Expiry) and a callback with err/token

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
      res.status(500).send('server error');
    }
  }
);

module.exports = userRouter;
