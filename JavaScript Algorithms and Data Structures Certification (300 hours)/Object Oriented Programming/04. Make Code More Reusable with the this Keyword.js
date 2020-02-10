/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword

Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

dog.sayLegs() should return the given string.
Your code should use the this keyword to access the numLegs property of dog.


*/

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs());