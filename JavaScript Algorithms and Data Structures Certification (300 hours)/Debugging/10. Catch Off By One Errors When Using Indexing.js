/* Fix the two indexing errors in the following function so all the 
numbers 1 through 5 are printed to the console.

(1) Your code should set the initial condition of the loop so it starts 
at the first index.
(2) Your code should fix the initial condition of the loop so that the 
index starts at 0.
(3) Your code should set the terminal condition of the loop so it stops 
at the last index.
(4) Your code should fix the terminal condition of the loop so that it 
stops at 1 before the length. */

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
        // Do not alter code below this line
        console.log(firstFive[i]);
    }
}

countToFive();
