// Write a regex fccRegex to match "freeCodeCamp", no matter its case. 
// Your regex should not match any abbreviations or variations with spaces.

// Your regex should match freeCodeCamp
// Your regex should match FreeCodeCamp
// Your regex should match FreecodeCamp
// Your regex should match FreeCodecamp
// Your regex should not match Free Code Camp
// Your regex should match FreeCOdeCamp
// Your regex should not match FCC
// Your regex should match FrEeCoDeCamp
// Your regex should match FrEeCodECamp
// Your regex should match FReeCodeCAmp

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
