const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(
  MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!');
  },
);
