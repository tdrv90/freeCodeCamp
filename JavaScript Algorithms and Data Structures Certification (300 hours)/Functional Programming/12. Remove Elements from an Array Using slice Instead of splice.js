/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice

Rewrite the function nonMutatingSplice by using slice instead of splice. 
It should limit the provided cities array to a length of 3, and return a new 
array with only the first three items.

Do not mutate the original array provided to the function.

(1) Your code should use the slice method.
(2) Your code should not use the splice method.
(3) The inputCities array should not change.
(4) nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) 
    should return ["Chicago", "Delhi", "Islamabad"].
*/

function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);
    // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);