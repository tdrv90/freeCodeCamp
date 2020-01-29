// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables today and tomorrow the values 
// of today and tomorrow from the HIGH_TEMPERATURES object.

// You should remove the ES5 assignment syntax.
// You should use destructuring to create the today variable.
// You should use destructuring to create the tomorrow variable.


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
