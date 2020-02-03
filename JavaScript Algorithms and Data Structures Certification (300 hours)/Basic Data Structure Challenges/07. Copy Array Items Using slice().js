/* We have defined a function, forecast, that takes an array as an argument. 
Modify the function using slice() to extract information from the argument 
array and return a new array that contains the elements 'warm' and 'sunny'.

forecast should return ["warm", "sunny"]
The forecast function should utilize the slice() method */

function forecast(arr) {
    // change code below this line
    let slicedArr = [];
    slicedArr = arr.slice(2, 4);
    return slicedArr;
}

// do not change code below this line
console.log(forecast(
    [
        'cold',
        'rainy',
        'warm',
        'sunny',
        'cool',
        'thunderstorms'
    ]
));  