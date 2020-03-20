/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria

Use the some method inside the checkPositive function to check if any element 
in arr is positive. The function should return a Boolean value.

(1) Your code should use the some method.
(2) checkPositive([1, 2, 3, -4, 5]) should return true.
(3) checkPositive([1, 2, 3, 4, 5]) should return true.
(4) checkPositive([-1, -2, -3, -4, -5]) should return false.
*/

function checkPositive(arr) {
    // Only change code below this line
    const isPositive = x => x >= 0;

    return arr.some(isPositive);

    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5])); // true
console.log(checkPositive([-4, -5])); // false