/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

(1) uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 
    should return [1, 3, 2, 5, 4].
(2) uniteUnique([1, 2, 3], [5, 2, 1]) 
    should return [1, 2, 3, 5].
(3) uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 
    should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(arr) {
    const flat = [].concat(...arguments);

    return [... new Set(flat)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
