const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  const totalSum = numbers.reduce((a, b) => a + b, 0);
  return totalSum
};

const multiply = function(numbers) {
  const sum = numbers.reduce((a, b) => a * b);
  return sum;
};

const power = function(a,b) {
  let x = Math.pow(a, b);
  return x;
};

const factorial = function(a) {
  let x = 1
  for(i = 1; i < a + 1; i++){
    x = x * i
  };
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
