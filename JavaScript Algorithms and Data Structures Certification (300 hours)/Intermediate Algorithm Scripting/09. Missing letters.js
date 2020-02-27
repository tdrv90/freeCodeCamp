/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

(1) fearNotLetter("abce") should return "d".
(2) fearNotLetter("abcdefghjklmno") should return "i".
(3) fearNotLetter("stvwx") should return "u".
(4) fearNotLetter("bcdf") should return "e".
(5) fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/


function fearNotLetter(str) {
    const fullRange = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const startPos = fullRange.indexOf(str[0]);
    const endPos = fullRange.indexOf(str[str.length - 1]);
    const arrToCompare = fullRange.slice(startPos, endPos + 1);

    let strToArray = str.split('');

    return strToArray.length === arrToCompare.length
        ? undefined
        : arrToCompare.filter(x => !strToArray.includes(x)).join('');
}

console.log(fearNotLetter("abce")); // "d"