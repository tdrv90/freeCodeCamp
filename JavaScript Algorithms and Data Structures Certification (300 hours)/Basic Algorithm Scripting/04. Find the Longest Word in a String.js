/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

(1) findLongestWordLength("The quick brown fox jumped over the lazy dog")
should return a number.
(2) findLongestWordLength("The quick brown fox jumped over the lazy dog")
should return 6.
(3) findLongestWordLength("May the force be with you") should return 5.
(4) findLongestWordLength("Google do a barrel roll") should return 6.
(5) findLongestWordLength("What is the average airspeed velocity of an
unladen swallow") should return 8.
(6) findLongestWordLength("What if we try a super-long word such as
otorhinolaryngology") should return 19.
*/


function findLongestWordLength(str) {
    let longestWordLength = 0;

    str.split(" ").forEach(word => {
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
        }
    });

    return longestWordLength;
}

console.log(findLongestWordLength
    ("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength
    ("What if we try a super-long word such as otorhinolaryngology"));