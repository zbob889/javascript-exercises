const fibonacci = function(number) {

    if(Math.sign(number) === -1){
        return 'OOPS';
    }

    number = Number(number);

    let a = 0;
    let b = 1;
    let c = number;

    for(i = 2; i <= number; i++){

        c = a + b;
        a = b;
        b = c;

    }

    return c;

};

// Do not edit below this line
module.exports = fibonacci;
