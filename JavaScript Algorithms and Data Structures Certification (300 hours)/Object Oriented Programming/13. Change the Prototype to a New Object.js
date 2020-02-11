/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object


Add the property numLegs and the two methods eat() and describe() to 
the prototype of Dog by setting the prototype to a new object.

(1) Dog.prototype should be set to a new object.
(2) Dog.prototype should have the property numLegs.
(3) Dog.prototype should have the method eat().
(4) Dog.prototype should have the method describe().
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: () => { console.log('nom nom') },
    describe: () => { console.log(`My name is ${this.name}`) }
};
