/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
If a word does not contain a vowel, just add "ay" to the end.
Input strings are guaranteed to be English words in all lowercase.

(1) translatePigLatin("california") should return "aliforniacay".
(2) translatePigLatin("paragraphs") should return "aragraphspay".
(3) translatePigLatin("glove") should return "oveglay".
(4) translatePigLatin("algorithm") should return "algorithmway".
(5) translatePigLatin("eight") should return "eightway".
(6) Should handle words where the first vowel comes in the middle of the word.
    translatePigLatin("schwartz") should return "artzschway".
(7) Should handle words without vowels.
    translatePigLatin("rhythm") should return "rhythmay".
*/

function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));