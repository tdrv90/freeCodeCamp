/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance

Add all necessary code so the Dog object inherits from Animal and 
the Dog's prototype constructor is set to Dog. 
Then add a bark() method to the Dog object so that beagle can 
both eat() and bark(). The bark() method should print "Woof!" to the console.

(1) Animal should not respond to the bark() method.
(2) Dog should inherit the eat() method from Animal.
(3) Dog should have the bark() method as an own property.
(4) beagle should be an instanceof Animal.
(5) The constructor for beagle should be set to Dog.
*/

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
    console.log('Woof!');
}
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"