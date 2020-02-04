/* 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for...in-statement

We've defined a function countOnline which accepts one argument 
(a users object). Use a for...in statement within this function to loop through 
the users object passed into the function and return the number of users whose 
online property is set to true. An example of a users object which could be 
passed to countOnline is shown below. Each user will have an online property 
with either a true or false value.

{
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

(1) The function countOnline should use a`for in` statement to iterate 
through the object keys of the object passed to it.
(2) The function countOnline should return 1 when the object 
{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } 
is passed to it
(3) The function countOnline should return 2 when the object 
{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } 
is passed to it
(4) The function countOnline should return 0 when the object 
{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } 
is passed to it
*/

function countOnline(usersObj) {
    // change code below this line
    let count = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            count++;
        }
    }
    return count;
    // change code above this line
}
