/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property

We've created an object, users, with some users in it and a
function isEveryoneHere, which we pass the users object to as an argument.
Finish writing this function so that it returns true only if the users object
contains all four names, Alan, Jeff, Sarah, and Ryan, as keys,
and false otherwise.

(1) The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
(2) The function isEveryoneHere should return true
if Alan, Jeff, Sarah, and Ryan are properties on the users object
(3) The function isEveryoneHere should return false
if Alan is not a property on the users object
(4) The function isEveryoneHere should return false
if Jeff is not a property on the users object
(5) The function isEveryoneHere should return false
if Sarah is not a property on the users object
(6) The function isEveryoneHere should return false
if Ryan is not a property on the users object
*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    let names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
    return names.every(name => obj.hasOwnProperty(name));
    // change code above this line
}

console.log(isEveryoneHere(users));
