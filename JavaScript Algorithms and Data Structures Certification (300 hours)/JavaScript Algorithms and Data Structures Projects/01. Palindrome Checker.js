/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward 
and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and 
symbols) and turn everything into the same case (lower or upper case) in order 
to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and 
"race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and 
"2_A3*3#A2".

(01) palindrome("eye") should return a boolean.
(02) palindrome("eye") should return true.
(03) palindrome("_eye") should return true.
(04) palindrome("race car") should return true.
(05) palindrome("not a palindrome") should return false.
(06) palindrome("A man, a plan, a canal. Panama") should return true.
(07) palindrome("never odd or even") should return true.
(08) palindrome("nope") should return false.
(09) palindrome("almostomla") should return false.
(10) palindrome("My age is 0, 0 si ega ym.") should return true.
(11) palindrome("1 eye for of 1 eye.") should return false.
(12) palindrome("0_0 (: /-\ :) 0-0") should return true.
(13) palindrome("five|\_/|four") should return false.
*/

function palindrome(str) {
    const regex = /[\W_]/g;

    let original = str.replace(regex, '')
        .toLowerCase();

    let reversed = str.replace(regex, '')
        .toLowerCase()
        .split('')
        .reverse()
        .join('');

    return (original === reversed);
}

console.log(palindrome("eye"));