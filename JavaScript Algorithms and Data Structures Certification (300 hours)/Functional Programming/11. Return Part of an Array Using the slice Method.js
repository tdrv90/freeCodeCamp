/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method


Use the slice method in the sliceArray function to return part of the anim array
given the provided beginSlice and endSlice indices. 
The function should return an array.

(1) Your code should use the slice method.
(2) The inputAnim variable should not change.
(3) sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) 
    should return ["Dog", "Tiger"].
(4) sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) 
    should return ["Cat"].
(5) sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) 
    should return ["Dog", "Tiger", "Zebra"].
*/

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice);
    // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));

