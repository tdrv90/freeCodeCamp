// Use the shorthand character class \W to count the number of non-alphanumeric 
// characters in various quotes and strings.

// (1) Your regex should use the global flag.
// (2) Your regex should find 6 non-alphanumeric characters 
// in "The five boxing wizards jump quickly.".
// (3) Your regex should use the shorthand character to match characters which 
// are non-alphanumeric.
// (4) Your regex should find 8 non-alphanumeric characters 
// in "Pack my box with five dozen liquor jugs."
// (5) Your regex should find 6 non-alphanumeric characters 
// in "How vexingly quick daft zebras jump!"
// (6) Your regex should find 12 non-alphanumeric characters
// in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."

let firstQuoteSample = "The five boxing wizards jump quickly.";
let secondQuoteSample = "Pack my box with five dozen liquor jugs.";
let thirdQuoteSample = "How vexingly quick daft zebras jump!";
let forthQuoteSample = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";

let nonAlphabetRegex = /\W+/g; // Change this line

console.log(firstQuoteSample.match(nonAlphabetRegex).length); // 6
console.log(secondQuoteSample.match(nonAlphabetRegex).length); // 8
console.log(thirdQuoteSample.match(nonAlphabetRegex).length); // 6
console.log(forthQuoteSample.match(nonAlphabetRegex).length); // 12