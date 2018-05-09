var router = require('express').Router();
var Kegs = require('../models/keg');

//create a beer
router.post('/api/kegs', (req, res, next) => {
    Kegs.create(req.body)
        .then(keg => {
            if (!keg) {
                return res.status(400).send({ error: "Could not create keg" })
            } else {
                res.send(keg)
            }
        })
        .catch(next)
})

router.get('/api/kegs/:beerId', (req, res, next) => {
    Kegs.find({beerId: req.params.beerId})
        .then(keg => {
            res.send(keg)
        })
        .catch(next)
})

router.put('/api/kegs/:beerId/quantity', (req, res, next) => {
    Kegs.findOneAndUpdate({beerId: req.params.beerId}, req.body, {new: true})
        .then(keg => {
            res.send(keg)
        })
        .catch(next)
})

module.exports = router;