let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Taplist"

let schema = new Schema({
    creatorId: { type: ObjectId, ref: 'User', required: true },
    beers: [{
        beerId: {type: ObjectId, ref: 'Beer', required: true},
        quantity: {type: Number, required: true}
    }]
})


module.exports = mongoose.model(schemaName, schema)