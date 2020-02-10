/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties

Add all of the own properties of beagle to the array ownProps.
Add all of the prototype properties of Dog to the array prototypeProps.

(1) The ownProps array should include "name".
(2) The prototypeProps array should include "numLegs".
(3) You should solve this challenge without using the built in method
    Object.keys().
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line

for (const prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop);
    } else {
        prototypeProps.push(prop);
    }
}