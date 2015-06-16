module.exports =

function (depCity, arrCity, discount, bags, cabin, wifi, youPay){

  var disc;
  if (discount === "10OFF") {
    disc = 0.9;
  } else if (discount === "20OFF") {
    disc = 0.8;
  } else {
    disc = 1;
  }

  var airPrice;
  if (depCity === arrCity || depCity == "none" || arrCity == "none"){
    airPrice = 0;
  } else if ((depCity == "Chicago" && arrCity == "Los Angeles") || (depCity == "Los Angeles" && arrCity == "Chicago")) {
    airPrice = 350;
  } else if ((depCity == "Chicago" && arrCity == "New York") || (depCity == "New York" && arrCity == "Chicago")) {
    airPrice = 250;
  } else if ((depCity == "Los Angeles" && arrCity == "New York") || (depCity == "New York" && arrCity == "Los Angeles")) {
    airPrice = 545;
  } else {
    airPrice = 0;
  }
    airPrice = airPrice * disc;

  var bagPrice;
  if (bags < 0) {
    bagPrice = 0;
  } else {
    bagPrice = bags * 25;
  }

  var cabinPrice;
  if (cabin == "Coach") {
    cabinPrice = 0;
  } else if (cabin == "Business") {
    cabinPrice = 200;
  } else if (classChoice == "First") {
    cabinPrice = 500;
  }

  var wifiPrice;
  if (!wifi) {
    wifiPrice = 0;
  } else {
    wifiPrice = 12;
  }


  if (!depCity || !arrCity || depCity === arrCity) {
    return "Hey now! Let's pick a separate departure and arrival city before we start worrying about cost!";
  } else {
    return (airPrice + bagPrice + cabinPrice + wifiPrice).toFixed(2);
  }
};
