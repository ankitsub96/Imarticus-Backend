const Course = require("../../models/Course"); 

const http = require("http"); 
const { response } = require("express");
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

// const jwt = require("jsonwebtoken");

module.exports = {

  createCourse: async (req, res, next) => {
    try { 
       
    }
    catch (e) {
      console.log('Course Create error:::', e)
      return res.status(500).json({
        status: {
          message: e.message,
          code: e.code,
        },
      });
    }
  } 
};


