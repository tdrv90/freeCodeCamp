/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself

The eat method is repeated in both Cat and Bear. Edit the code in the spirit 
of DRY by moving the eat method to the Animal supertype.

(1) Animal.prototype should have the eat property.
(2) Bear.prototype should not have the eat property.
(3) Cat.prototype should not have the eat property.
*/

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
