/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

Your code should use the sort method.
The globalArray variable should not change.
nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
nonMutatingSort(globalArray) should not be hard coded.
The function should return a new array, not the array passed to it.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    let arrCopySorted = [...arr]
        .sort((a, b) => a - b);

    return arrCopySorted;
    // Only change code above this line
}
console.log(nonMutatingSort(globalArray)); // [ 2, 3, 5, 6, 9 ]