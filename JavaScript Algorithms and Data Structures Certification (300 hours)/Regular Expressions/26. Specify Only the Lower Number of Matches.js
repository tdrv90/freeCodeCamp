/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-only-the-lower-number-of-matches


Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

Your regex should use curly brackets.
Your regex should not match "Hazzah"
Your regex should not match "Hazzzah"
Your regex should match "Hazzzzah"
Your regex should match "Hazzzzzah"
Your regex should match "Hazzzzzzah"
Your regex should match "Hazzah" with 30 z's in it.
*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
