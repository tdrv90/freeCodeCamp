/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/add-elements-to-the-end-of-an-array-using-concat-instead-of-push

Change the nonMutatingPush function so it uses concat to add newItem to 
the end of original instead of push. The function should return an array.

(1) Your code should use the concat method.
(2) Your code should not use the push method.
(3) The first array should not change.
(4) The second array should not change.
(5) nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].
*/

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    
    return original.concat(newItem);

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
