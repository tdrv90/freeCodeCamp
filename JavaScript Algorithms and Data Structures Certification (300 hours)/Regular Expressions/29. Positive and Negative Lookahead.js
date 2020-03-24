/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead

Use lookaheads in the pwRegex to match passwords that are greater than 
5 characters long, do not begin with numbers, and have two consecutive digits.

(1) Your regex should use two positive lookaheads.
(2) Your regex should not match "astronaut"
(3) Your regex should not match "banan1"
(4) Your regex should match "bana12"
(5) Your regex should match "abc123"
(6) Your regex should not match "1234"
(7) Your regex should not match "8pass99"
(8) Your regex should not match "12abcde"
(9) Your regex should match "astr1on11aut"
*/

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);