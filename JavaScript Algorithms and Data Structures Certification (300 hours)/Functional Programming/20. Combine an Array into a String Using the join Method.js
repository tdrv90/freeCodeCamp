/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

(1) Your code should use the join method.
(2) Your code should not use the replace method.
(3) sentensify("May-the-force-be-with-you") should return a string.
(4) sentensify("May-the-force-be-with-you") should return "May the force be with you".
(5) sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
(6) sentensify("There,has,been,an,awakening") should return "There has been an awakening".
*/

function sentensify(str) {
    // Only change code below this line
    return str
        .split(/\W/)
        .join(' ');
    // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));
