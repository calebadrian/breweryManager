var router = require('express').Router();
var Cases = require('../models/case');

//create a beer
router.post('/api/cases', (req, res, next) => {
    Cases.create(req.body)
        .then(singleCase => {
            if (!singleCase) {
                return res.status(400).send({ error: "Could not create keg" })
            } else {
                res.send(singleCase)
            }
        })
        .catch(next)
})

router.get('/api/cases/:beerId', (req, res, next) => {
    Cases.find({beerId: req.params.beerId})
        .then(keg => {
            res.send(keg)
        })
        .catch(next)
})

router.put('/api/cases/:beerId/quantity', (req, res, next) => {
    Cases.findOneAndUpdate({beerId: req.params.beerId}, req.body, {new: true})
        .then(singleCase => {
            res.send(singleCase)
        })
        .catch(next)
})

module.exports = router;