/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters

Fix the regex so that it checks for the names of Franklin Roosevelt or 
Eleanor Roosevelt in a case sensitive manner and it should make 
concessions for middle names.

Then fix the code so that the regex that you have created is checked against 
myString and either true or false is returned depending on whether the regex 
matches.

(1) Your regex myRegex should return true for the string Franklin D. Roosevelt
(2) Your regex myRegex should return true for the string Eleanor Roosevelt
(3) Your regex myRegex should return false for the string Franklin Rosevelt
(4) Your regex myRegex should return false for the string Frank Roosevelt
(5) You should use .test() to test the regex.
(6) Your result should return true.
*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line

console.log(result);