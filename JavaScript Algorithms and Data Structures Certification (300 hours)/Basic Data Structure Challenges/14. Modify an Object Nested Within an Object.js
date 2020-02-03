/* Here we've defined an object, userActivity, which includes another object
nested within it. You can modify properties on this nested object in the same
way you modified properties in the last challenge.
Set the value of the online key to 45.

(1) userActivity should have id, date and data properties.
(2) userActivity should have a data key set to an object with keys totalUsers
and online.
(3) The online property nested in the data key of userActivity should be set
to 45
(4) The online property should be set using dot or bracket notation. */


let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// change code below this line
    userActivity.data.online = 45;
// change code above this line

console.log(userActivity);
