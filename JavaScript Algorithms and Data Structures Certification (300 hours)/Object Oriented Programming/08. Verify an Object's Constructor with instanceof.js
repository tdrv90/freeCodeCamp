/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof

Create a new instance of the House constructor, calling it myHouse and passing
a number of bedrooms. Then, use instanceof to verify that it is an instance
of House.

(1) myHouse should have a numBedrooms attribute set to a number.
(2) You should verify that myHouse is an instance of House using
    the instanceof operator.
*/

/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(4);
console.log(myHouse instanceof House);