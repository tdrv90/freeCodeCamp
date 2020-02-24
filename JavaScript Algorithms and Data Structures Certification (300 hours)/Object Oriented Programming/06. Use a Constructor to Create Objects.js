/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects

Use the Dog constructor from the last lesson to create a new instance of Dog,
assigning it to a variable hound.

(1) hound should be created using the Dog constructor.
(2) Your code should use the new operator to create an instance of Dog.
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
  // Add your code below this line

let hound = new Dog();