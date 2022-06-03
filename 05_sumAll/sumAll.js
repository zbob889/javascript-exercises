const sumAll = function(...numbers) {
    if(numbers.some(number => number < 0)){
        return 'ERROR'
    }
    if(numbers.some(value => typeof(value) != 'number')){
        return 'ERROR'
    }

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let totalSum = 0;

    for(let i = min; i < max + 1; i++){
        totalSum += i;
    };

    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
