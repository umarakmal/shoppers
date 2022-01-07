const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// setting up config file
require('dotenv').config()


//connecting database
connectDatabase();

app.listen(process.env.PORT ,  function() {
    console.log('Server started on http://localhost:${process.env.PORT}')
})