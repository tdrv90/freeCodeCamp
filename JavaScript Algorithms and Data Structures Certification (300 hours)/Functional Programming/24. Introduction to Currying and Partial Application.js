/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application

Fill in the body of the add function so it uses currying 
to add parameters x, y, and z.

(1) add(10)(20)(30) should return 60.
(2) add(1)(2)(3) should return 6.
(3) add(11)(22)(33) should return 66.
(4) Your code should include a final statement that returns x + y + z.
*/

function add(x) {
    // Only change code below this line
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }

    // Only change code above this line
}

console.log(add(10)(20)(30)); // 60