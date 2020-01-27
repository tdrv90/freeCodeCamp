// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".


// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }

    return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");



