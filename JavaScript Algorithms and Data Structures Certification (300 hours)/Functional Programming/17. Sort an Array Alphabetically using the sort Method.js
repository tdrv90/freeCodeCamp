/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

(1) Your code should use the sort method.
(1) alphabeticalOrder(["a", "d", "c", "a", "z", "g"])
    should return ["a", "a", "c", "d", "g", "z"].
(1) alphabeticalOrder(["x", "h", "a", "m", "n", "m"])
    should return ["a", "h", "m", "m", "n", "x"].
(1) alphabeticalOrder(["a", "a", "a", "a", "x", "t"])
    should return ["a", "a", "a", "a", "t", "x"].
*/

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort((a, b) => a.localeCompare(b));
    // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// [ 'a', 'a', 'c', 'd', 'g', 'z' ]
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
// ["a", "h", "m", "m", "n", "x"]
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));
// ["a", "a", "a", "a", "t", "x"]