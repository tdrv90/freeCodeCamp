// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables highToday and highTomorrow 
// the values of today and tomorrow from the HIGH_TEMPERATURES object.

// You should remove the ES5 assignment syntax.
// You should use destructuring to create the highToday variable.
// You should use destructuring to create the highTomorrow variable.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
