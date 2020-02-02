// Use the caret character in a regex to find "Cal" only in the beginning 
// of the string rickyAndCal.

// (1) Your regex should search for "Cal" with a capital letter.
// (2) Your regex should not use any flags.
// (3) Your regex should match "Cal" at the beginning of the string.
// (4) Your regex should not match "Cal" in the middle of a string.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result); // true