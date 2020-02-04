/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object

Take a look at the object we've provided in the code editor. 
The user object contains three keys. The data key contains five keys, 
one of which contains an array of friends. From this, you can see how flexible 
objects are as data structures. We've started writing a function addFriend. 
Finish writing it so that it takes a user object and adds the name of the friend 
argument to the array stored in user.data.friends and returns that array.

(1) The user object should have name, age, and data keys.
(2) The addFriend function should accept a user object and a friend string 
as arguments and add the friend to the array of friends in the user object.
(3) addFriend(user, "Pete") should return ["Sam", "Kira", "Tomo", "Pete"].

*/

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line
    return userObj.data.friends = [...userObj.data.friends, friend];
    // change code above this line
}

console.log(addFriend(user, 'Pete'));
