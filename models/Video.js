const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const videoSchema = mongoose.Schema({
   name: {type: String, required: true},  
   description: {type: String, default: ''},
   url: {type: String, required: true }, 
   status: {type: String, required: true, default: "active"}, 
},{ timestamps: true });

videoSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Video', videoSchema);