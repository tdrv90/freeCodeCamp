/* 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-property-names-with-bracket-notation

We've defined a function, checkInventory, which receives a scanned item as 
an argument. Return the current value of the scannedItem key in 
the foods object. You can assume that only valid keys will be provided as an 
argument to checkInventory.

(1) checkInventory should be a function.
(2) The foods object should have only the following key-value pairs: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.
(3) checkInventory("apples") should return 25.
(4) checkInventory("bananas") should return 13.
(5) checkInventory("strawberries") should return 27. */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
