//assign port and load required modules
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//get restaurant.js
const Restaurant = require('./models/restaurant')
//load router
const routes = require('./routes')
//load mongoose
require('./config/mongoose')

//set handlebars, body-parser and router
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

//listen server
app.listen(port , () => {
    console.log(`Restaurant list is running on http://localhost:${port}`)
})