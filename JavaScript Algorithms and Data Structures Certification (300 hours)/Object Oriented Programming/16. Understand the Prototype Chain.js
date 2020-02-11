/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain

The hasOwnProperty method is defined in Object.prototype, which can be accessed
by Bird.prototype, which can then be accessed by duck.
This is an example of the prototype chain. In this prototype chain, Bird is
the supertype for duck, while duck is the subtype. Object is a supertype
for both Bird and duck. Object is a supertype for all objects in JavaScript.
Therefore, any object can use the hasOwnProperty method.

Modify the code to show the correct prototype chain.

(1) Your code should show that Object.prototype is
    the prototype of Dog.prototype
*/


function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);