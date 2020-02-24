/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

Compare two arrays and return a new array with any items only found in one 
of the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.

Note
You can return the array with its elements in any order.

(01) diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
(02) ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
    should return ["pink wool"].
(03) ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
    should return an array with one item.
(04) ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
    should return ["diorite", "pink wool"].
(05) ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
    should return an array with two items.
(06) ["andesite", "grass", "dirt", "dead shrub"], 
["andesite", "grass", "dirt", "dead shrub"] should return [].
(07) ["andesite", "grass", "dirt", "dead shrub"], 
["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
(08) [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
(09) [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
(10) [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
(11) [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should 
    return an array with two items.
(12) [], ["snuffleupagus", "cookie monster", "elmo"] should 
    return ["snuffleupagus", "cookie monster", "elmo"].
(13) [], ["snuffleupagus", "cookie monster", "elmo"] should return 
    an array with three items.
(14) [1, "calf", 3, "piglet"], [7, "filly"] should 
    return [1, "calf", 3, "piglet", 7, "filly"].
(15) [1, "calf", 3, "piglet"], [7, "filly"] should 
    return an array with six items.
*/

function diffArray(arr1, arr2) {
    return arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
