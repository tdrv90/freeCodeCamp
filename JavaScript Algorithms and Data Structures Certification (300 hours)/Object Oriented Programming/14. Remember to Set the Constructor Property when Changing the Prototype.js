/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype

Define the constructor property on the Dog prototype.

(1) Dog.prototype should set the constructor property.
*/

function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};
