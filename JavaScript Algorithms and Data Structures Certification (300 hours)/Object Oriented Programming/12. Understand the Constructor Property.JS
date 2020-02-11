/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property

Write a joinDogFraternity function that takes a candidate parameter and, 
using the constructor property, return true if the candidate is a Dog, 
otherwise return false.

(1) joinDogFraternity should be defined as a function.
(2) joinDogFraternity should return true ifcandidate is an instance of Dog.
(3) joinDogFraternity should use the constructor property.
*/

function Dog(name) {
    this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return falseD;
    }
}
