// Use the shorthand character class for non-digits \D to count how many 
// non-digits are in movie titles.

// (1) Your regex should use the shortcut character to match non-digit 
// characters
// (2) Your regex should use the global flag.
// (3) Your regex should find no non-digits in "9".
// (4) Your regex should find 6 non-digits in "Catch 22".
// (5) Your regex should find 11 non-digits in "101 Dalmatians".
// (6) Your regex should find 15 non-digits in "One, Two, Three".
// (7) Your regex should find 12 non-digits in "21 Jump Street".
// (8) Your regex should find 17 non-digits in "2001: A Space Odyssey".

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result); // 17