/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property

Fix the code so duck.constructor and beagle.constructor return their respective constructors.

(1) Bird.prototype should be an instance of Animal.
(2) duck.constructor should return Bird.
(3) Dog.prototype should be an instance of Animal.
(4) beagle.constructor should return Dog.
*/

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
