var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  req.session.username = req.body.username;
  
  res.redirect('/users/view');
});

router.get('/view', function(req, res, next) {
  var username = req.session.username;
  res.render('view-user', { username:username });
});

module.exports = router;
