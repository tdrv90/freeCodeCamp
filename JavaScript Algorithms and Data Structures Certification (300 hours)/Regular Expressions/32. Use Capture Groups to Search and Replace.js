/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace

Write a regex fixRegex using three capture groups that will search for each word
in the string "one two three". Then update the replaceText variable to replace 
"one two three" with the string "three two one" and assign the result to 
the result variable. Make sure you are utilizing capture groups in 
the replacement string using the dollar sign ($) syntax.

(1) You should use .replace() to search and replace.
(2) Your regex should change "one two three" to "three two one"
(3) You should not change the last line.
(4) fixRegex should use at least three capture groups.
(5) replaceText should use parenthesized submatch string(s) (i.e. the nth 
    parenthesized submatch string, $n, corresponds to the nth capture group).
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

