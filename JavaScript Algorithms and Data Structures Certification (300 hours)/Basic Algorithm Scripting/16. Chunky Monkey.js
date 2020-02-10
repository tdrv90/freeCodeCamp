/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

(1) chunkArrayInGroups(["a", "b", "c", "d"], 2) should return 
    [["a", "b"], ["c", "d"]].
(2) chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return 
    [[0, 1, 2], [3, 4, 5]].
(3) chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return 
    [[0, 1], [2, 3], [4, 5]].
(4) chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return 
    [[0, 1, 2, 3], [4, 5]].
(5) chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return 
    [[0, 1, 2], [3, 4, 5], [6]].
(6) chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return 
    [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
(6) chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return 
    [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {
    let output = [];

    while (arr.length) {
        output.push(arr.splice(0, size));
    }

    return output;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [['a', 'b'], ['c', 'd']]
