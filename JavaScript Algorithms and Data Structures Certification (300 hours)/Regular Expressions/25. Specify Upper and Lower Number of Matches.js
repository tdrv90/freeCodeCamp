/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches

Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

(1) Your regex should use curly brackets.
(2) Your regex should not match "Ohh no"
(3) Your regex should match "Ohhh no"
(4) Your regex should match "Ohhhh no"
(5) Your regex should match "Ohhhhh no"
(6) Your regex should match "Ohhhhhh no"
(7) Your regex should not match "Ohhhhhhh no"
*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
