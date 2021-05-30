const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const moduleSchema = mongoose.Schema({
   name: {type: String, required: true},  
   type: {type: String, required: true}, //free or paid 
   videos: {type: Array, required: true, default: []},
   status: {type: String, required: true, default: "active"}, 
},{ timestamps: true });

moduleSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Module', moduleSchema);