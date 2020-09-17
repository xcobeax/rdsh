const express = require('express')
const Route = express.Router()

const controller = require('../controllers/controllers')

Route
  .get('/dashboard', controller.getDashboard)
  .get('/dashboard/csv', controller.getCsv)
module.exports = Route
