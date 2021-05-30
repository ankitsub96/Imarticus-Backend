var express = require('express');
var router = express.Router( {mergeParams: true} );
const checkAuth = require("../../middleware/check-auth");
 
let get = require('./get');
let post = require('./post');

//post requests 
router.get('/:moduleId', checkAuth, get.fetchModule);  
// router.post('/', checkAuth, post.createModule); 

module.exports = router;
