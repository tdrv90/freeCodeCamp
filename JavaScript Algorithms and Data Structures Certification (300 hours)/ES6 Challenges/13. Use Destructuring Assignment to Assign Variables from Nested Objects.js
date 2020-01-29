// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables lowToday and highToday the values of 
// today.low and today.high from the LOCAL_FORECAST object.

// You should remove the ES5 assignment syntax.
// You should use destructuring to create the lowToday variable.
// You should use destructuring to create the highToday variable.

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// change code above this line

console.log(lowToday); // should be 64
console.log(highToday); // should be 77
