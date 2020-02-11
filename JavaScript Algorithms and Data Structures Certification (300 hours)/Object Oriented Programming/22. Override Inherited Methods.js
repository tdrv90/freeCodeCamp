/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods

Override the fly() method for Penguin so that it
    returns "Alas, this is a flightless bird."

(1) penguin.fly() should return the string "Alas, this is a flightless bird."
(2) The bird.fly() method should return "I am flying!"
*/

function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = () => {
    return 'Alas, this is a flightless bird.';
}
// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
