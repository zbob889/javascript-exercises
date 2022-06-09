const palindromes = function (words) {

    words = words.replace(/[^a-zA-Z]/g, '');
    words = words.replace(' ', '');
    words = words.toLowerCase();

    reverse = [...words].reverse().join("");

    if (words === reverse){
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = palindromes;
