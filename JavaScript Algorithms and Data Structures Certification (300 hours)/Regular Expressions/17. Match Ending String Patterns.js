// Use the anchor character ($) to match the string "caboose" at the end
// of the string caboose.

// (1) You should search for "caboose" with the dollar sign $ anchor in your regex.
// (2) Your regex should not use any flags.
// (3) You should match "caboose" at the end of the string "
// (4) The last car on a train is the caboose"

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result); // true