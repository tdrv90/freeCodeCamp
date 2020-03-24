/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches

Change the regex timRegex to match the word "Timber" only when it has four letter m's.

(1) Your regex should use curly brackets.
(2) Your regex should not match "Timber"
(3) Your regex should not match "Timmber"
(4) Your regex should not match "Timmmber"
(5) Your regex should match "Timmmmber"
(6) Your regex should not match "Timber" with 30 m's in it.
*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result);