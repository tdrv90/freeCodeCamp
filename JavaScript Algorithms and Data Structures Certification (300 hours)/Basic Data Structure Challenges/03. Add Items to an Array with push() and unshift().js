/* We have defined a function, mixedNumbers, which we are passing an array 
as an argument. Modify the function by using push() and unshift() to add 
'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end 
so that the returned array contains representations of the numbers 1-9 in order.

(1) mixedNumbers(["IV", 5, "six"]) should now return 
["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]
(2) The mixedNumbers function should utilize the push() method
(3) The mixedNumbers function should utilize the unshift() method */

function mixedNumbers(arr) {
    // change code below this line
    arr.unshift(...["I", 2, "three"]);
    arr.push(...[7, 'VIII', 9]);
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));