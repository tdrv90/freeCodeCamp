// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] 
// using various element assignment.

// You should not replace const keyword.
// s should be a constant variable (by using const).
// You should not change the original array declaration.
// s should be equal to [2, 5, 7].


const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    // change code below this line
    // s = [2, 5, 7]; <- this is invalid
    s[0] = 2; s[1] = 5; s[2] = 7;
    return s;
    // change code above this line
}
editInPlace();
