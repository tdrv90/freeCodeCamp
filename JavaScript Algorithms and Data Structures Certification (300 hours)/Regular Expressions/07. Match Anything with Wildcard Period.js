// Complete the regex unRegex so that it matches the strings 
// "run", "sun", "fun", "pun", "nun", and "bun". 
// Your regex should use the wildcard character.

// You should use the .test() method.
// You should use the wildcard character in your regex unRegex
// Your regex unRegex should match "run" in 
// "Let us go on a run."
// Your regex unRegex should match "sun" in 
// "The sun is out today."
// Your regex unRegex should match "fun" in 
// "Coding is a lot of fun."
// Your regex unRegex should match "pun" in 
// "Seven days without a pun makes one weak."
// Your regex unRegex should match "nun" in 
// "One takes a vow to be a nun."
// Your regex unRegex should match "bun" in 
// "She got fired from the hot dog stand for putting her hair in a bun."

// Your regex unRegex should not match "There is a bug in my code."
// Your regex unRegex should not match "Catch me if you can."


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
