/* 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10.

(1) sumAll([1, 4]) should return a number.
(2) sumAll([1, 4]) should return 10.
(3) sumAll([4, 1]) should return 10.
(4) sumAll([5, 10]) should return 45.
(5) sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
    let min = +arr[0];
    let max = +arr[1];
    let sum = 0;

    if (arr[0] > arr[1]) {
        min = +arr[1];
        max = +arr[0];
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([10, 5])); // 45
