const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const courseSchema = mongoose.Schema({
   name: {type: String, required: true},  
   type: {type: String, required: true}, //free or paid 
   modules: {type: Array, required: true, default: []},
   status: {type: String, required: true, default: "active"}, 
},{ timestamps: true });

courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Course', courseSchema);