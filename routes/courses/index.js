var express = require('express');
var router = express.Router( {mergeParams: true} );
const checkAuth = require("../../middleware/check-auth");
 
let get = require('./get');
let post = require('./post');

//post requests 
router.get('/:courseId', checkAuth, get.fetchCourse); 
router.get('/', checkAuth, get.fetchAllCourses);
// router.post('/', checkAuth, post.createCourse); 

module.exports = router;
