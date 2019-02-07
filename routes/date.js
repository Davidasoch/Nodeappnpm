var express = require('express');
var router = express.Router();
 var datetime = new Date();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('The date is '+datetime);
});

module.exports = router;
