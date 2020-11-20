const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//homepage
router.get('/', (req, res) => {
    Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

//sorting function
router.get('/sort/:sorting', (req, res) => {
    let sortRecord = {
        aToZ: false,
        zToA: false,
        category: false,
        location: false
    }
    const sorting = req.params.sorting
    switch(sorting){
        case 'A-Z':
            sortRecord.aToZ = true
            Restaurant.find()
            .lean()
            .sort({ name: 'asc' })
            .then(restaurant => res.render('index', { restaurant, sortRecord }))
            .catch(error => console.log(error))
            break
        case 'Z-A' :
            sortRecord.zToA = true
            Restaurant.find()
            .lean()
            .sort({ name: 'desc' })
            .then(restaurant => res.render('index', { restaurant, sortRecord }))
            .catch(error => console.log(error))
            break
        case 'category' :
            sortRecord.category = true
            Restaurant.find()
            .lean()
            .sort({ category: 'asc' })
            .then(restaurant => res.render('index', { restaurant, sortRecord }))
            .catch(error => console.log(error))
            break
        case 'location' :
            sortRecord.location = true
            Restaurant.find()
            .lean()
            .sort({ location: 'asc' })
            .then(restaurant => res.render('index', { restaurant, sortRecord }))
            .catch(error => console.log(error))
            break
    }
})

module.exports = router