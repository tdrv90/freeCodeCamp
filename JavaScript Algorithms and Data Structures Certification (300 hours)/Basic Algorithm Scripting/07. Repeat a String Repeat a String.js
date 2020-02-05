/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

(1) repeatStringNumTimes("*", 3) should return "***".
(2) repeatStringNumTimes("abc", 3) should return "abcabcabc".
(3) repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
(4) repeatStringNumTimes("abc", 1) should return "abc".
(5) repeatStringNumTimes("*", 8) should return "********".
(6) repeatStringNumTimes("abc", -2) should return "".
(7) The built-in repeat() method should not be used.
(8) repeatStringNumTimes("abc", 0) should return "".
*/

function repeatStringNumTimes(str, num) {
    let output = [];

    if (num <= 0) {
        return "";
    }

    for (let i = 0; i < num; i++) {
        output.push(str);
    }

    return output.join('');
}

console.log(repeatStringNumTimes("abc", 3));
