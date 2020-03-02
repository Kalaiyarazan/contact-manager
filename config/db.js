const mongoose = require('mongoose');
const config = require('config');
const MONGO_URI = config.get('MONGO_URI');

const ConnectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log('DB Connected Successfully');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = ConnectDB;
