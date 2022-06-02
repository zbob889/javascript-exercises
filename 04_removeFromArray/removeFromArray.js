const removeFromArray = function(array, ...numbersToRemove) {

    let newArray = array.filter(number => numbersToRemove.includes(number) === false)

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
