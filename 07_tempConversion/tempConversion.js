const ftoc = function(fahrenheit) {
  newTemp = (fahrenheit - 32) * (5/9);
  newTemp = +newTemp.toFixed(1);
  return newTemp;
};

const ctof = function(celcius) {
  newTemp = celcius * (9/5) + 32;
  newTemp = +newTemp.toFixed(1);
  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
