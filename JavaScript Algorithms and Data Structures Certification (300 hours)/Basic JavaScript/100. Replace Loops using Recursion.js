// Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.

// sum([1], 0) should equal 1.
// sum([2, 3, 4], 1) should equal 5.
// Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
// You should use recursion to solve this problem.

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return arr[0];
    } else {
        return sum(arr, n - 1) + arr[n];
    }
    // Only change code above this line
}

console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
