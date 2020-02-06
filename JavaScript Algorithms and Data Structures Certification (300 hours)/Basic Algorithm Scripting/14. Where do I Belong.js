/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because 
it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array 
has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) 
and greater than 5 (index 1).

(01) getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
(02) getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
(03) getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
(04) getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
(05) getIndexToIns([40, 60], 50) should return 1.
(06) getIndexToIns([40, 60], 50) should return a number.
(07) getIndexToIns([3, 10, 5], 3) should return 0.
(08) getIndexToIns([3, 10, 5], 3) should return a number.
(09) getIndexToIns([5, 3, 20, 3], 5) should return 2.
(10) getIndexToIns([5, 3, 20, 3], 5) should return a number.
(11) getIndexToIns([2, 20, 10], 19) should return 2.
(12) getIndexToIns([2, 20, 10], 19) should return a number.
(13) getIndexToIns([2, 5, 10], 15) should return 3.
(14) getIndexToIns([2, 5, 10], 15) should return a number.
(15) getIndexToIns([], 1) should return 0.
(16) getIndexToIns([], 1) should return a number.
*/

function getIndexToIns(arr, num) {
    return [...arr, num]
        .sort((a, b) => a - b)
        .indexOf(num);
}

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3