// Match all the letters in the string quoteSample.

// Note
// Be sure to match both upper- and lowercase letters.

// Your regex alphabetRegex should match 35 items.
// Your regex alphabetRegex should use the global flag.
// Your regex alphabetRegex should use the case insensitive flag.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line