/* 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions

So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and 
return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only 
on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles 
when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either 
function. The add function should add the given bookName to the end of an array.
The remove function should remove the given bookName from an array. 
Both functions should return an array, and any new parameters should be added 
before the bookName parameter.

(1) bookList should not change and still equal 
    ["The Hound of the Baskervilles", 
    "On The Electrodynamics of Moving Bodies", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae"].
(2) newBookList should equal 
    ["The Hound of the Baskervilles", 
    "On The Electrodynamics of Moving Bodies", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae", 
    "A Brief History of Time"].
(3) newerBookList should equal 
    ["The Hound of the Baskervilles", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae"].
(4) newestBookList should equal 
    ["The Hound of the Baskervilles", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae", 
    "A Brief History of Time"].
*/

// the global variable
var bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(bookList, bookName) {
    let newBookList = [...bookList];
    newBookList.push(bookName);
    return newBookList;
    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(bookList, bookName) {
    var book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
        let newBookList = [...bookList];
        newBookList.splice(book_index, 1);
        return newBookList;

        // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'),
    'On The Electrodynamics of Moving Bodies');

console.log(bookList);