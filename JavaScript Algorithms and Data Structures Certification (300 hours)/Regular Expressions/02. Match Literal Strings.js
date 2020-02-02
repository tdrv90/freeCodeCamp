// omplete the regex waldoRegex to find "Waldo" in the string waldoIsHiding 
// with a literal match.

// Your regex waldoRegex should find "Waldo"
// Your regex waldoRegex should not search for anything else.
// You should perform a literal string match with your regex.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /search/; // Change this line
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);