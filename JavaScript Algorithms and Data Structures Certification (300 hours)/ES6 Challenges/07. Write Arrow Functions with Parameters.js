// Rewrite the myConcat function which appends contents of arr2 to arr1 
// so that the function uses arrow function syntax.

// You should replace the var keyword.
// myConcat should be a constant variable (by using const).
// myConcat should be a function.
// myConcat() should return [1, 2, 3, 4, 5].
// function keyword should not be used.


const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));