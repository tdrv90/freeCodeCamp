/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife


Rewrite the function makeNest and remove its call so instead it's an anonymous 
immediately invoked function expression (IIFE).

(1) The function should be anonymous.
(2) Your function should have parentheses at the end of the expression 
    to call it immediately.
*/


// function makeNest() {
//     console.log("A cozy nest is ready");
// }
// makeNest();

(function () {
    console.log("A cozy nest is ready");
})();