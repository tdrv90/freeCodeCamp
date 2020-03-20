/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method

Use the concat method in the nonMutatingConcat function to concatenate attach 
to the end of original. The function should return the concatenated array.

(1) Your code should use the concat method.
(2) The first array should not change.
(3) The second array should not change.
(4) nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].
*/

function nonMutatingConcat(original, attach) {
    // Only change code below this line
    
    return original.concat(attach);
    
    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
