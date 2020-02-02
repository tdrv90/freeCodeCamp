// Create a single regex that matches all characters that are not a number 
// or a vowel. Remember to include the appropriate flags in the regex.

// Your regex myRegex should match 9 items.
// Your regex myRegex should use the global flag.
// Your regex myRegex should use the case insensitive flag.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou1-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line