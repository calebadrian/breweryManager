let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Beer"
let bcrypt = require("bcryptjs")
const SALT_FACTOR = 12

let schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    onTap: { type: Boolean, required: true, default: true },
    abv: { type: Number, required: true },
    ibu: { type: Number, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    creatorId: { type: ObjectId, ref: 'User', required: true }
})


module.exports = mongoose.model(schemaName, schema)