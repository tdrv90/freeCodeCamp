/* Using the same syntax, we can also add new key-value pairs to objects. 
We've created a foods object with three entries. 
Add three more entries: bananas with a value of 13, grapes with a value of 35, 
and strawberries with a value of 27.

(1) foods should be an object.
(2) The foods object should have a key "bananas" with a value of 13.
(3) The foods object should have a key "grapes" with a value of 35.
(4) The foods object should have a key "strawberries" with a value of 27.
(5) The key-value pairs should be set using dot or bracket notation. */


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// change code below this line
    foods['bananas'] = 13;
    foods.grapes = 35;
    foods['strawberries'] = 27;
// change code above this line

console.log(foods);
