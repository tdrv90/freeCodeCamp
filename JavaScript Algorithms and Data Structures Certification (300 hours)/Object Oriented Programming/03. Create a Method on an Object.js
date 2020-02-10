/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object


Using the dog object, give it a method called sayLegs.
The method should return the sentence "This dog has 4 legs."

(1) dog.sayLegs() should be a function.
(2) dog.sayLegs() should return the given string - note that punctuation and
    spacing matter.
*/

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => { return `This dog has ${dog.numLegs} legs.` }
};

console.log(dog.sayLegs());