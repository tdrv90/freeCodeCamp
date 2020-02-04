/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object.keys

Finish writing the getArrayOfUsers function so that it returns an array
containing all the properties in the object it receives as an argument.

(1) The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
(2) The getArrayOfUsers function should return an array which contains all
the keys in the users object
*/

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
}

console.log(getArrayOfUsers(users));
