/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-non-whitespace-characters

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

(1) Your regex should use the global flag.
(2) Your regex should use the shorthand character \S to match 
    all non-whitespace characters.
(3) Your regex should find 35 non-spaces in 
    "Men are from Mars and women are from Venus."
(4) Your regex should find 23 non-spaces in 
    "Space: the final frontier."
(5) Your regex should find 21 non-spaces in 
    "MindYourPersonalSpace"
*/

let sample = "Men are from Mars and women are from Venus.";
let countNonWhiteSpace = /\S/gi; // Change this line
let result = sample.match(countNonWhiteSpace);

console.log(result.length); // 35