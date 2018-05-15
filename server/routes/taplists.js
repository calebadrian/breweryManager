var router = require('express').Router();
var Taplists = require('../models/taplist');
var Users = require('../models/user')

//create a beer
router.post('/api/taplists', (req, res, next) => {
    Taplists.create(req.body)
        .then(taplist => {
            if (!taplist) {
                return res.status(400).send({ error: "Could not create beer" })
            } else {
                res.send(taplist)
            }
        })
        .catch(next)
})

router.get('/api/taplist/:userId', (req, res, next) => {
    Taplists.findOne({creatorId: req.params.userId})
        .then(taplist => {
            res.send(taplist)
        })
        .catch(next)
})





module.exports = router;