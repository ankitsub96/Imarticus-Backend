const Module = require("../../models/Module"); 

const http = require("http"); 
const { response } = require("express");
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

// const jwt = require("jsonwebtoken");

module.exports = {

  createModule: async (req, res, next) => {
    try { 
       
    }
    catch (e) {
      console.log('Module Create error:::', e)
      return res.status(500).json({
        status: {
          message: e.message,
          code: e.code,
        },
      });
    }
  } 
};


