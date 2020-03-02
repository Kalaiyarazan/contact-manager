const express = require('express');

const userRouter = express.Router();

//@Route        POST api/users
//@desc         Register a user
//@access       Public

userRouter.post('/', (req, res) => {
  res.send('Register a User');
});

module.exports = userRouter;
