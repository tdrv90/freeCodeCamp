/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(val, flatArr = []) {
    val.forEach(item => {
        if (Array.isArray(item)) steamrollArray(item, flatArr);
        else flatArr.push(item);
    });
    return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));