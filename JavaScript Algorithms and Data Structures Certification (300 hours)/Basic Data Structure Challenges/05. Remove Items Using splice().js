/* We've initialized an array arr. Use splice() to remove elements from arr, 
so that it only contains elements that sum to the value of 10.

(1) You should not change the original line of const 
arr = [2, 4, 5, 1, 7, 5, 2, 1];.
(2) arr should only contain elements that sum to 10.
(3) Your code should utilize the splice() method on arr.
(4) The splice should only remove elements from arr and not add any additional 
elements to arr. */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line
let spliced = arr.splice(1, 4);
// only change code above this line
console.log(arr); // [ 2, 5, 2, 1 ]