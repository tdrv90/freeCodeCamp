// Fix the two pair errors in the code.

// (1) Your code should fix the missing piece of the array.
// (2) Your code should fix the missing piece of the .reduce() method. 
// The console output should show that "Sum of array values is: 7".

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);