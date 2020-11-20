const express = require('express')
const router = express.Router()

//load home.js and restaurants.js
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

//set routes
router.use('/', home)
router.use('/restaurants', restaurants)

module.exports = router