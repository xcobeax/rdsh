const express = require('express')
const Route = express.Router()

const noteController = require('../controllers/controllers')

Route
  .get('/cat', noteController.getNote)
module.exports = Route
