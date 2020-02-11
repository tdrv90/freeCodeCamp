/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally

Change how weight is declared in the Bird function so it is a private variable. 
Then, create a method getWeight that returns the value of weight 15.

(1) The weight property should be a private variable and should be 
    assigned the value of 15.
(2) Your code should create a method in Bird called getWeight that 
    returns the value of the private variable weight.
(3) Your getWeight function should return the private variable weight.
*/

function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}