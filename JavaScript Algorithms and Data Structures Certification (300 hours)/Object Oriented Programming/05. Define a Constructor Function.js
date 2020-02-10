/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function

Create a constructor, Dog, with properties name, color, and numLegs 
that are set to a string, a string, and a number, respectively.

(1) Dog should have a name property set to a string.
(2) Dog should have a color property set to a string.
(3) Dog should have a numLegs property set to a number.
*/

function Dog() {
    this.name = 'Doge';
    this.color = 'Brown';
    this.numLegs = 4;
}