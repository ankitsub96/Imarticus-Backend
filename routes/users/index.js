var express = require('express');
var router = express.Router( {mergeParams: true} );
const checkAuth = require("../../middleware/check-auth");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
// let get = require('./get');
let post = require('./post');

//post requests
router.post('/', post.signup);
router.post('/:email/login', post.login);
// router.post('/:userId/updateDetails', checkAuth, post.updateDetails); 

module.exports = router;
