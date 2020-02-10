/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties

Add the own properties of canary to the array ownProps.

(1) ownProps should include the values "numLegs" and "name".
(2) You should solve this challenge without using the built in method
    Object.keys().
(3) You should solve this challenge without hardcoding the ownProps array.
*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (const prop in canary) {
    if (canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}

console.log(ownProps); // [ 'name', 'numLegs' ]