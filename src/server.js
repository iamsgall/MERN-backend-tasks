const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// Initializations
const app = express();
require('dotenv').config();
require('./database');

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Routes
app.use('/api/tasks', require('./routes/tasks.routes'));

// Static Files

// Start Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
