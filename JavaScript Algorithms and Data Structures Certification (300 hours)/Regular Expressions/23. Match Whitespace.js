/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-whitespace

Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

(1) Your regex should use the global flag.
(2) Your regex should use the shorthand character \s to match 
    all whitespace characters.
(3) Your regex should find eight spaces in 
    "Men are from Mars and women are from Venus."
(4) Your regex should find three spaces in 
    "Space: the final frontier."
(5) Your regex should find no spaces in "MindYourPersonalSpace"
*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
