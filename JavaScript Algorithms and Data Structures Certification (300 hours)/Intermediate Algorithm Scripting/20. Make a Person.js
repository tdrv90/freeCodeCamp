/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has 
to be a string. These methods must be the only available means of interacting 
with the object.

(01) Object.keys(bob).length should return 6.
(02) bob instanceof Person should return true.
(03) bob.firstName should return undefined.
(04) bob.lastName should return undefined.
(05) bob.getFirstName() should return "Bob".
(06) bob.getLastName() should return "Ross".
(07) bob.getFullName() should return "Bob Ross".
(08) bob.getFullName() 
    should return "Haskell Ross" after bob.setFirstName("Haskell").
(09) bob.getFullName() 
    should return "Haskell Curry" after bob.setLastName("Curry").
(10) bob.getFullName() 
    should return "Haskell Curry" after bob.setFullName("Haskell Curry").
(11) bob.getFirstName() 
    should return "Haskell" after bob.setFullName("Haskell Curry").
(12) bob.getLastName() 
    should return "Curry" after bob.setFullName("Haskell Curry").
*/


const Person = function (firstAndLast) {
    let fullName = firstAndLast;
    // Complete the method below and implement the others similarly

    this.getFirstName = () => {
        return fullName.split(' ')[0];
    };

    this.getLastName = () => {
        return fullName.split(' ')[1];
    };

    this.getFullName = () => {
        return fullName;
    };

    this.setFirstName = (name) => {
        fullName = `${name} ${fullName.split(' ')[1]}`;
    };

    this.setLastName = (name) => {
        fullName = `${fullName.split(' ')[0]} ${name}`;
    };

    this.setFullName = (name) => {
        fullName = name;
    };
};

const bob = new Person('Bob Ross');
bob.setFirstName('Haskell');
console.log(bob.getFullName());
console.log(bob.getLastName());