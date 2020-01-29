// Use object property shorthand with object literals to create and return
// an object with name, age and gender properties.

// createPerson("Zodiac Hasbro", 56, "male") should return 
// {name: "Zodiac Hasbro", age: 56, gender: "male"}.
// Your code should not use key:value.

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return { name, age, gender };
    // change code above this line
};

// returns a proper object
console.log(createPerson("Zodiac Hasbro", 56, "male")); 