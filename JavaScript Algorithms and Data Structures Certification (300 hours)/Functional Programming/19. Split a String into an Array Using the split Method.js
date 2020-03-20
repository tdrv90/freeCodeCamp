/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

(1) Your code should use the split method.
(2) splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
(3) splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
(4) splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
*/

function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);
    // Only change code above this line
}
console.log(splitify("Hello World,I-am code"));
