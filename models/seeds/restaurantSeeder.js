//load restaurant module
const Restaurant = require('../restaurant')
const db = require('../../config/mongoose')
//load seeds
const restaurantList = require('./restaurant.json')

db.once('open', () => {
  for (i = 0; i < restaurantList.results.length; i++) {
    Restaurant.create(restaurantList.results[i]);
  }
})