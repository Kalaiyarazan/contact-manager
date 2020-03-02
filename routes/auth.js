const express = require('express');

const authRouter = express.Router();

//@Route        GET api/auth
//@desc         Get logged in user
//@access       Private

authRouter.get('/', (req, res) => {
  res.send('Get logged in user');
});

//@Route        POST api/auth
//@desc         Auth user & Get Token
//@access       Public

authRouter.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = authRouter;
