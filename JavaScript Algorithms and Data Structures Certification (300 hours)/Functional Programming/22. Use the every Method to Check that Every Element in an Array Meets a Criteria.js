/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria

Use the every method inside the checkPositive function to check if every element
in arr is positive. The function should return a Boolean value.

(1) Your code should use the every method.
(2) checkPositive([1, 2, 3, -4, 5]) should return false.
(3) checkPositive([1, 2, 3, 4, 5]) should return true.
(4) checkPositive([1, -2, 3, -4, 5]) should return false.
*/

function checkPositive(arr) {
    // Only change code below this line

    const isPositive = (x) => x >= 0;

    return arr.every(isPositive);

    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5])); // false
console.log(checkPositive([1, 2, 3, 4, 5])); // true