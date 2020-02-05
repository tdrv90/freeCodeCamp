/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

Check if a string (first argument, str) ends with the given target 
string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced 
in ES2015. But for the purpose of this challenge, we would like you to use 
one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

(1) confirmEnding("Bastian", "n") should return true.
(2) confirmEnding("Congratulation", "on") should return true.
(3) confirmEnding("Connor", "n") should return false.
(4) confirmEnding("Walking on water and developing software from 
    a specification are easy if both are frozen", "specification") should 
    return false.
(5) confirmEnding("He has to give me a new name", "name") should return true.
(6) confirmEnding("Open sesame", "same") should return true.
(7) confirmEnding("Open sesame", "pen") should return false.
(8) confirmEnding("Open sesame", "game") should return false.
(9) confirmEnding("If you want to save our world, you must hurry. 
    We dont know how much longer we can withstand the nothing", "mountain") 
    should return false.
(10) confirmEnding("Abstraction", "action") should return true.
(11) Your code should not use the built-in method .endsWith() to solve 
    the challenge.
*/


function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
