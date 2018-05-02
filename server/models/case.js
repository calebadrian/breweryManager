let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Case"

let schema = new Schema({
    creatorId: { type: ObjectId, ref: 'User', required: true },
    beerId: {type: ObjectId, ref: 'Beer', required: true},
    quantity: {type: Number, required: true, default: 0}
})


module.exports = mongoose.model(schemaName, schema)