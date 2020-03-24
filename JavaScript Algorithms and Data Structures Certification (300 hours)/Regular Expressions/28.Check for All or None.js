/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-all-or-none

Change the regex favRegex to match both the American English (favorite) 
and the British English (favourite) version of the word.

(1) Your regex should use the optional symbol, ?.
(2) Your regex should match "favorite"
(3) Your regex should match "favourite"
(4) Your regex should not match "fav"
*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result);