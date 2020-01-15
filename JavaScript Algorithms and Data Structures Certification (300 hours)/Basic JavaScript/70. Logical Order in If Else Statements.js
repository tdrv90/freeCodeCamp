// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {

    if (val >= 10) {
        return "Greater than or equal to 10";
    } else if (val >= 5) {
        return "Less than 10";
    } else {
        return "Less than 5";
    }
}

// Change this value to test
orderMyLogic(7);
