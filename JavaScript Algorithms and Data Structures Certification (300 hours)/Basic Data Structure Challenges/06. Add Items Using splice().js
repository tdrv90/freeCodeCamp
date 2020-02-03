/* We have defined a function, htmlColorNames, which takes an array of HTML 
colors as an argument. Modify the function using splice() to remove the first 
two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' 
in their respective places.

(1) htmlColorNames should return 
["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]
(2) The htmlColorNames function should utilize the splice() method
(3) You should not use shift() or unshift().
(4) You should not use array bracket notation. */

function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(htmlColorNames(
    [
        'DarkGoldenRod',
        'WhiteSmoke',
        'LavenderBlush',
        'PaleTurqoise',
        'FireBrick'
    ]
));
