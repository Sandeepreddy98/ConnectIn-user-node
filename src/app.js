const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const mongoDB = require('./config/database')
const PORT = 9002;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser())

// Middleware to parse URL-encoded bodies (usually from forms)
app.use(express.urlencoded({ extended: true }));

const mongoConnect = async () => {
    try{
        await mongoDB()
        console.log("Database connected successfully!!🚀🚀");
        app.listen(PORT,() => {
            console.log("Database connected successfully!!🚀🚀");   
        })
    }catch(err){
        console.log("Database connection failed!!🚀🚀");
    }
}

mongoConnect()