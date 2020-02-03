// Fix the condition so the program runs the right branch, and the appropriate 
// value is assigned to result.

// (1) Your code should fix the condition so it checks for equality, instead of 
// using assignment.
// (2) The condition should use either == or === to test for equality.

let x = 7;
let y = 9;
let result = "to come";

if (x === y) { // it was (x = y)
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);