
/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
  
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1, 1, 3, and 5.

(1) sumFibs(1) should return a number.
(2) sumFibs(1000) should return 1785.
(3) sumFibs(4000000) should return 4613732.
(4) sumFibs(4) should return 5.
(5) sumFibs(75024) should return 60696.
(6) sumFibs(75025) should return 135721.
*/

function sumFibs(num) {
    let previous = 0;
    let current = 1;
    let result = 0;

    while (current <= num) {
        if (current % 2 !== 0) {
            result += current;
        };

        current += previous;
        previous = current - previous;
    }

    return result;
}

console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732