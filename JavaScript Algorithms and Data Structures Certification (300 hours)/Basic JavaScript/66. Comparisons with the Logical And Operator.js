// Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".


function testLogicalAnd(val) {
    // Only change code below this line
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);
