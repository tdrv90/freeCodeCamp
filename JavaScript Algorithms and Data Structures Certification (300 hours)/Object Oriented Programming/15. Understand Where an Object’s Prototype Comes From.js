/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from

Use isPrototypeOf to check the prototype of beagle.

(1) You should show that Dog.prototype is the prototype of beagle
*/

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);