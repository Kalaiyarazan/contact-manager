const mongoose = require('mongoose');
const config = require('config');
const MONGO_URI = config.get('MONGO_URI');

const ConnectDB = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log('DB Connection Success'))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = ConnectDB;
