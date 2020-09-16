require('dotenv').config() // Initialize dotenv config

const express = require('express') // Import express
const bodyParser = require('body-parser') // Import body-parses
const app = express() // Create method
const port = process.env.PORT || 9999 // Default PORT

const userRoute = require('./src/routes/routes')

app.listen(port, () => {
  console.log(`\n Running On Port : ${port}\n`)
}) // Create listening app

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/', userRoute)
