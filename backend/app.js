const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');

const errorMiddleware = require('./middleware/errors');


//setting envirment variable
dotenv.config({path: 'config/config.env'});



app.use(express.json());
app.use(cookieParser());


//import all routes
const auth = require('./routes/auth');




//mount routes
app.use('/api/v1', auth);



//middleware to handle errrors
app.use(errorMiddleware);


module.exports = app;