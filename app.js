//assign port and load required modules
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//get restaurant.js
const Restaurant = require('./models/restaurant')
//load router
const routes = require('./routes')

//set handlebars, body-parser and router
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

//connect and get connection status of database
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})

//search function
app.get('/search', (req, res) => {
    const keyword = req.query.keyword.trim()
    return Restaurant.find({$or: [{name: { "$regex": keyword, "$options": "i" }}, {name_en: { "$regex": keyword, "$options": "i" }}, {category: { "$regex": keyword, "$options": "i" }}]})
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.log(error))
})

//listen server
app.listen(port , () => {
    console.log(`Restaurant list is running on http://localhost:${port}`)
})