/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

Check if the predicate (second argument) is truthy on all elements of 
a collection (first argument).
In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its 
value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated 
in a Boolean context.
Remember, you can access object properties through either dot notation 
or [] notation.

(1) truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") 
    should return true.
(2) truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") 
    should return false.
(3) truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") 
    should return false.
(4) truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") 
    should return false
(5) truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") 
    should return true
(6) truthCheck([{"single": "yes"}], "single") 
    should return true
(7) truthCheck([{"single": ""}, {"single": "double"}], "single") 
    should return false
(8) truthCheck([{"single": "double"}, {"single": undefined}], "single") 
    should return false
(9) truthCheck([{"single": "double"}, {"single": NaN}], "single") 
    should return false
*/

function truthCheck(collection, pre) {
    return collection.every((el) => {
        return el.hasOwnProperty(pre) && Boolean(el[pre]);
    });
}

console.log(truthCheck(
    [
        { "user": "Tinky-Winky", "sex": "male" },
        { "user": "Dipsy", "sex": "male" },
        { "user": "Laa-Laa", "sex": "female" },
        { "user": "Po", "sex": "female" }
    ],
    "sex"));