/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

(1) reverseString("hello") should return a string.
(2) reverseString("hello") should become "olleh".
(3) reverseString("Howdy") should become "ydwoH".
(4) reverseString("Greetings from Earth") should return "htraE morf sgniteerG".

*/

function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");