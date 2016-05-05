var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(typeof(req.session.number)===undefined) req.session.number = 0;
  var actual = req.session.number;
  req.session.number = actual+1;
  res.render('index', { title: 'Express', number: actual });
});

module.exports = router;
