var router = require('express').Router();
var Beers = require('../models/beer');
var Users = require('../models/user')

//create a beer
router.post('/api/beers', (req, res, next) => {
    Beers.create(req.body)
        .then(beer => {
            if (!beer) {
                return res.status(400).send({ error: "Could not create beer" })
            } else {
                res.send(beer)
            }
        })
        .catch(next)
})

router.get('/api/beers/:beerId', (req, res, next) => {
    Beers.findById(req.params.beerId)
        .then(beer => {
            res.send(beer)
        })
        .catch(next)
})

router.get('/api/beers', (req, res, next) => {
    Beers.find()
        .then(beers => {
            res.send(beers)
        })
        .catch(next)
})





module.exports = router;