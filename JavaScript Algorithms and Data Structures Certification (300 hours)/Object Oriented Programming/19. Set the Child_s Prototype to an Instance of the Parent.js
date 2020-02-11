/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent

Modify the code so that instances of Dog inherit from Animal.

Dog.prototype should be an instance of Animal.
*/

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"