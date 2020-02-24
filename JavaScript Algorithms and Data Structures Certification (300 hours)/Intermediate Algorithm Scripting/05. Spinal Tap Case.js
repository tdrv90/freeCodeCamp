/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.

(1) spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
(2) spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
(3) spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
(4) spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
(5) spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/) // whitespace, underscore or uppercase letter
        .join("-")
        .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap')); // this-is-spinal-tap