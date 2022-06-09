const findTheOldest = function(people) {

    people.forEach(function(person) {
        if('yearOfDeath' in person === false){
            person.yearOfDeath = 2022;
        };
    });

    const oldestPeople = people.sort(function (a,b) {
        const firstPerson = a.yearOfDeath - a.yearOfBirth;
        const secondPerson = b.yearOfDeath - b.yearOfBirth;

        if(firstPerson < secondPerson){
            return 1;
        } else {
            return -1
        };
    });

    return oldestPeople[0];

};

// Do not edit below this line
module.exports = findTheOldest;
