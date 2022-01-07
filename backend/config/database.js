const mongoose = require ("mongoose");
require('dotenv').config()


const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/shoppers",{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }).then(con => {
        console.log('MongoDB Database connected with HOST: ${con.connection.host}');
    })
}


module.exports = connectDatabase;