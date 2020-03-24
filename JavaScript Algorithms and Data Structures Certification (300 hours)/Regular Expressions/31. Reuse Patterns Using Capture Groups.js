/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups

Use capture groups in reRegex to match numbers that are repeated only three 
times in a string, each separated by a space.

(01) Your regex should use the shorthand character class for digits.
(02) Your regex should reuse a capture group twice.
(03) Your regex should have two spaces separating the three numbers.
(04) Your regex should match "42 42 42".
(05) Your regex should match "100 100 100".
(06) Your regex should not match "42 42 42 42".
(07) Your regex should not match "42 42".
(08) Your regex should not match "101 102 103".
(09) Your regex should not match "1 2 3".
(10) Your regex should match "10 10 10".
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result);