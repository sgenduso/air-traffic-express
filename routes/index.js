var express = require('express');
var router = express.Router();
var calculate = require('../public/javascripts/logic.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Fare Calculator' });
});

router.post('/', function (req, res, next) {
  var depCity = req.body.departure;
  var arrCity = req.body.arrival;
  var discount = req.body.discount;
  var bags = req.body.bags;
  var cabin = req.body.cabin;
  var wifi = req.body.wifi;
  var youPay = req.body.youpay;
  var output = calculate(depCity, arrCity, discount, bags, cabin, wifi, youPay);
  res.render('index', {price: output, title: 'Air Fare Calculator'});
});


module.exports = router;
