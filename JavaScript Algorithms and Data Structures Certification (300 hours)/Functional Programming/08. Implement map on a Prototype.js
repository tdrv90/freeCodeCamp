/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

Write your own Array.prototype.myMap(), which should behave exactly like 
Array.prototype.map(). You may use a for loop or the forEach method.

(1) new_s should equal [46, 130, 196, 10].
(2) Your code should not use the map method.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Only change code below this line
    this.forEach(a => newArray.push(callback(a)));
    // Only change code above this line
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s); // [46, 130, 196, 10]