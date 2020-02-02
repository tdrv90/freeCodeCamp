// Use the shorthand character class \w to count the number of alphanumeric 
// characters in various quotes and strings.

// (1) Your regex should use the global flag.
// (2) Your regex should use the shorthand character \w to match 
// all characters which are alphanumeric.
// (3) Your regex should find 31 alphanumeric characters 
// in "The five boxing wizards jump quickly."
// (4) Your regex should find 32 alphanumeric characters 
// in "Pack my box with five dozen liquor jugs."
// (5) Your regex should find 30 alphanumeric characters 
// in "How vexingly quick daft zebras jump!"
// (6) Your regex should find 36 alphanumeric characters 
// in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."

let firstQuoteSample = "The five boxing wizards jump quickly.";
let secondQuoteSample = "Pack my box with five dozen liquor jugs.";
let thirdQuoteSample = "How vexingly quick daft zebras jump!";
let forthQuoteSample = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";

let alphabetRegexV2 = /\w/g; // Change this line

console.log(firstQuoteSample.match(alphabetRegexV2).length); // 31
console.log(secondQuoteSample.match(alphabetRegexV2).length); // 32
console.log(thirdQuoteSample.match(alphabetRegexV2).length); // 30
console.log(forthQuoteSample.match(alphabetRegexV2).length); // 36