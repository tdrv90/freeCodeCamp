/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code

Add a numLegs property to the prototype of Dog

(1) beagle should have a numLegs property.
(2) beagle.numLegs should be a number.
(3) numLegs should be a prototype property not an own property.
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");

console.log(beagle.numLegs); // 4