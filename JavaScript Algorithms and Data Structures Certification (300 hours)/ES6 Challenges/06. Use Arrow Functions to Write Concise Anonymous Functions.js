// Rewrite the function assigned to the variable magic which returns 
// a new Date() to use arrow function syntax. Also make sure nothing is 
// defined using the keyword var.

// User should replace var keyword.
// magic should be a constant variable (by using const).
// magic should be a function.
// magic() should return correct date.
// function keyword should not be used.


// var magic = function () {
//     "use strict";
//     return new Date();
// };

const magic = () => {
    "use strict";
    return new Date();
};
