/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

We have defined a function named squareList. You need to complete the code for 
the squareList function using any combination of map(), filter(), and reduce() 
so that it returns a new array containing only the square of only the positive 
integers (decimal numbers are not integers) when an array of real numbers is 
passed to it. An example of an array containing only real numbers is 
[-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops 
or the forEach() function.

(1) squareList should be a function.
(2) for or while loops or forEach should not be used.
(3) map, filter, or reduce should be used.
(4) The function should return an array.
(5) squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) 
    should return [16, 1764, 36].
(6) squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) 
    should return [9, 100, 49].
*/

const squareList = (arr) => {
    // Only change code below this line

    return arr
        .filter(x => x > 0)
        .filter(x => Number.isInteger(x) === true)
        .map(x => x * x);

    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]); // [25, 9]
console.log(squaredIntegers);