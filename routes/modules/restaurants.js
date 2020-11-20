const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//search function
router.get('/search', (req, res) => {
    const keyword = req.query.keyword.trim()
    return Restaurant.find({$or: [{name: { '$regex': keyword, '$options': 'i' }}, {name_en: { '$regex': keyword, '$options': 'i' }}, {category: { '$regex': keyword, '$options': 'i' }}]})
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.log(error))
})

//create new restaurant page and create function
router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) => {
    const newRestaurant = req.body
    return Restaurant.create(newRestaurant)
    .then(res.redirect('/'))
    .catch(error => console.log(error))
})

//restaurant details
router.get('/:id', (req,res) => {
    const id = req.params.id
    return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

//delete restaurant
router.delete('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(res.redirect('/'))
    .catch(error => console.log(error))
})

//edit restaurant page and edit function
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', {restaurant}))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
    .then(restaurant => {
        restaurant.name = req.body.name
        restaurant.name_en = req.body.name_en
        restaurant.category = req.body.category
        restaurant.image = req.body.image
        restaurant.location = req.body.location
        restaurant.phone = req.body.phone
        restaurant.google_map = req.body.google_map
        restaurant.rating = req.body.rating
        restaurant.description = req.body.description
        return restaurant.save()
    })
    .then(res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router