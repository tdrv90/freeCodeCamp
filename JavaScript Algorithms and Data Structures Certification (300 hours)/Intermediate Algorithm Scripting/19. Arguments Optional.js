/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

Create a function that sums two arguments together. If only one argument is 
provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should 
return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.

(1) addTogether(2, 3) should return 5.
(2) addTogether(2)(3) should return 5.
(3) addTogether("http://bit.ly/IqT6zt") should return undefined.
(4) addTogether(2, "3") should return undefined.
(5) addTogether(2)([3]) should return undefined.
*/

function addTogether() {
    let args = [...arguments];

    return args.some(n => typeof n !== 'number')
        ? undefined
        : args.length > 1
            ? args.reduce((acc, n) => (acc += n), 0)
            : n => (typeof n === 'number'
                ? n + args[0]
                : undefined);
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(2)(3)); // 5
