// For this challenge, chewieQuote has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" 
// behind the scenes. Create a regex chewieRegex that uses the * character 
// to match an uppercase "A" character immediately followed by zero or more 
// lowercase "a" characters in chewieQuote. Your regex does not need flags or 
// character classes, and it should not match any of the other quotes.

// (1) Your regex chewieRegex should use the * character to match zero or more 
// "a" characters.
// (2) Your regex should match "A" in chewieQuote.
// (3) Your regex should match "Aaaaaaaaaaaaaaaa" in chewieQuote.
// (4) Your regex chewieRegex should match 16 characters in chewieQuote.
// (5) Your regex should not match any characters in "He made a fair move. 
// Screaming about it can't help you."
// (6) Your regex should not match any characters in "Let him have it. 
// It's not wise to upset a Wookiee."

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// chewieQuote initialized here as well so it can be used
let fairQuote = "He made a fair move. Screaming about it can't help you.";
let wookieQuote = "Let him have it. It's not wise to upset a Wookiee.";

let chewieRegex = /[A]+[a]*/; // Only change this line

console.log(chewieQuote.match(chewieRegex)); // 'Aaaaaaaaaaaaaaaa'
console.log(fairQuote.match(chewieRegex)); // null
console.log(wookieQuote.match(chewieRegex)); // null