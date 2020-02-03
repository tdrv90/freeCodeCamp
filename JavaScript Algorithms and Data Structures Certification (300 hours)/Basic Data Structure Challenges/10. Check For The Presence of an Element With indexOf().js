/* indexOf() can be incredibly useful for quickly checking for the presence 
of an element on an array. We have defined a function, quickCheck, that 
takes an array and an element as arguments. Modify the function using 
indexOf() so that it returns true if the passed element exists on the array, 
and false if it does not.

(1) quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
(2) quickCheck(["onions", "squash", "shallots"], "onions") should return true
(3) quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
(4) quickCheck([true, false, false], undefined) should return false
(5) The quickCheck function should utilize the indexOf() method */

function quickCheck(arr, elem) {
    // change code below this line
    if (arr.indexOf(elem) == -1) {
        return false;
    }
    return true;
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
