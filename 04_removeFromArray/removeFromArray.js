const removeFromArray = function(array, ...numbersToRemove) {

    let newArray = array;

    newArray.splice(numbersToRemove - 1, 1);

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
