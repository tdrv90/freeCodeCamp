// Use the shorthand character class \d to count how many digits are in movie 
// titles. Written out numbers ("six" instead of 6) do not count.

// (1) Your regex should use the shortcut character to match digit characters
// (2) Your regex should use the global flag.
// (3) Your regex should find 1 digit in "9".
// (4) Your regex should find 2 digits in "Catch 22".
// (5) Your regex should find 3 digits in "101 Dalmatians".
// (6) Your regex should find no digits in "One, Two, Three".
// (7) Your regex should find 2 digits in "21 Jump Street".
// (8) Your regex should find 4 digits in "2001: A Space Odyssey".

let firstMovieName = "9";
let secondMovieName = "Catch 22";
let thirdMovieName = "101 Dalmatians";
let forthMovieName = "One, Two, Three";
let fifthMovieName = "21 Jump Street";
let sixthMovieName = "2001: A Space Odyssey";

let numRegex = /\d/g; // Change this line

console.log(firstMovieName.match(numRegex).length); // 1
console.log(secondMovieName.match(numRegex).length); // 2
console.log(thirdMovieName.match(numRegex).length); // 3
console.log(forthMovieName.match(numRegex).length); 
// no digits => throws TypeError: Cannot read property 'length' of null
console.log(fifthMovieName.match(numRegex).length); // 2
console.log(sixthMovieName.match(numRegex).length); // 4