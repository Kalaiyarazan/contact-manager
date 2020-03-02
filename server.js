const express = require('express');

//Routes
const userRouter = require('./routes/users');
const contactRouter = require('./routes/contacts');
const authRouter = require('./routes/auth');

const ConnectDB = require('./config/db');

const app = express();

ConnectDB();

const PORT = process.env.PORT || 5000;

app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server started and running on port ' + PORT);
});
