/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module

Create a module named funModule to wrap the two mixins isCuteMixin
    and singMixin. funModule should return an object.

(1) funModule should be defined and return an object.
(2) funModule.isCuteMixin should access a function.
(3) funModule.singMixin should access a function.
*/

// let isCuteMixin = function (obj) {
//     obj.isCute = function () {
//         return true;
//     };
// };
// let singMixin = function (obj) {
//     obj.sing = function () {
//         console.log("Singing to an awesome tune");
//     };
// };


let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            }
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            }
        }
    }
})();