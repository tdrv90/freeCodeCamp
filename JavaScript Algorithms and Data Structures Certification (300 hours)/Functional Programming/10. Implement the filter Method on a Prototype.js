/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype

Write your own Array.prototype.myFilter(), which should behave exactly like 
Array.prototype.filter(). 
You may use a for loop or the Array.prototype.forEach() method.

(1) new_s should equal [23, 65, 5].
(2) Your code should not use the filter method.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    var newArray = [];

    this.forEach(function (x) {
        if (callback(x) === true) {
            newArray.push(x);
        }
    })
    // Only change code above this line
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s);