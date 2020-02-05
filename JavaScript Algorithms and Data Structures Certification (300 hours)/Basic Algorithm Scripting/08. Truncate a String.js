/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.

(1) truncateString("A-tisket a-tasket A green and yellow basket", 8) 
    should return "A-tisket...".
(2) truncateString("Peter Piper picked a peck of pickled peppers", 11) 
    should return "Peter Piper...".
(3) truncateString("A-tisket a-tasket A green and yellow basket", 
    "A-tisket a-tasket A green and yellow basket".length) should 
    return "A-tisket a-tasket A green and yellow basket".
(4) truncateString("A-tisket a-tasket A green and yellow basket", 
    "A-tisket a-tasket A green and yellow basket".length + 2) 
    should return "A-tisket a-tasket A green and yellow basket".
(5) truncateString("A-", 1) should return "A...".
(6) truncateString("Absolutely Longer", 2) should return "Ab...".
*/

function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    }

    return `${str.slice(0, num)}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
