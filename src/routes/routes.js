const express = require('express')
const Route = express.Router()

const noteController = require('../controllers/controllers')

Route
  .get('/dashboard', noteController.getDashboard)
  .get('/dashboard/csv', noteController.getCsv)
module.exports = Route
