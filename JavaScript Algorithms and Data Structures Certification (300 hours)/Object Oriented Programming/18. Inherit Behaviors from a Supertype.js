/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype

Use Object.create to make two instances of Animal named duck and beagle.

(1) The duck variable should be defined.
(2) The beagle variable should be defined.
(3) The duck variable should be initialised with Object.create.
(4) The beagle variable should be initialised with Object.create.
(5) duck should have a prototype of Animal.
(6) beagle should have a prototype of Animal.

*/

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
