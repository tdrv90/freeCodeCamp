/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words 
like "the" and "of".

(1) titleCase("I'm a little tea pot") should return a string.
(2) titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
(3) titleCase("sHoRt AnD sToUt") should return Short And Stout.
(4) titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should 
    return Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
    return str
        .split(" ")
        .map(word => {
            return word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

console.log(titleCase("I'm a little tea pot"));