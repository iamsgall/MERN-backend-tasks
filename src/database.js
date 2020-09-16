const mongoose = require('mongoose');

const {DB_URI} = process.env;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
