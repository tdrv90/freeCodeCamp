// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text 
// "<h1>Winter is coming</h1>". Remember the wildcard . in a regular 
// expression matches any character.

// The result variable should be an array with <h1> in it


// initial values:
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

console.log(result); // <h1>Winter is coming</h1>

// my solution:
let correctRegex = /<.*?>/; // Change this line
let correctResult = text.match(correctRegex);

console.log(correctResult); // <h1>