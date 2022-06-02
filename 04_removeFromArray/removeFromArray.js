const removeFromArray = function(array, ...numbersToRemove) {
    
    let newArray = array.filter(number => number != numbersToRemove)

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
