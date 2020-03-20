/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

Fill in the urlSlug function so it converts a string title and returns 
the hyphenated version for the URL. You can use any of the methods covered in 
this section, and don't use replace. 

Here are the requirements:
The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces

Tests:
(1) The globalTitle variable should not change.
(2) Your code should not use the replace method for this challenge.
(3) urlSlug("Winter Is Coming") should return "winter-is-coming".
(4) urlSlug(" Winter Is  Coming") should return "winter-is-coming".
(5) urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
(6) urlSlug("Hold The Door") should return "hold-the-door".
*/

// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
    return title
        .split(/\W/)
        .filter(x => x !== "")
        .map(x => x.toLowerCase())
        .join('-');
}
// Only change code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
