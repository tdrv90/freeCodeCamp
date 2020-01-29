// Use destructuring assignment to swap the values of a and b so that a
// receives the value stored in b, and b receives the value stored in a.

// Value of a should be 6, after swapping.
// Value of b should be 8, after swapping.
// You should use array destructuring to swap a and b.

let a = 8, b = 6;
// change code below this line
[a, b] = [b, a];
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8
