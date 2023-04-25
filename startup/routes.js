const error = require('../middleware/error')
const sectors = require('../routes/sectors')
const organizations = require('../routes/organizations')
const opportunities = require('../routes/opportunities')
const cities = require('../routes/cities')
const users = require('../routes/users')
const auth = require('../routes/auth')
const express = require('express')

module.exports = function(app) {
  app.use(express.json())
  app.use('/api/sectors', sectors)
  app.use('/api/organisations', organisations)
  app.use('/api/cities', cities)
  app.use('/api/opportunities', opportunities)
  app.use('/api/users', users)
  app.use('/api/auth', auth)
  app.use(error)
}
