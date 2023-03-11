require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()

try {
    mongoose.connect(process.env.DB_CONNECT, () => {
        console.log('DB connected')
    })
} catch (e) {
    console.log(e)
}

// allow cross-origin requests 
app.use(
    cors({
    
      credentials: true,
      origin: [
        "https://24c1-197-207-209-248.eu.ngrok.io", 
      ], 
      methods: ["GET", "POST"],
    })
  );
//
app.use(cookieParser())
//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoute = require('./routes/auth')
app.use('/auth', authRoute)

const profileRoute = require('./routes/profile')
app.use('/profile',profileRoute)


app.listen('3000', () => {
    console.log('listening to port 3000')
})
