/* 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in 
Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit 
temperature equivalent to the given Celsius temperature. Use the algorithm 
mentioned above to help convert the Celsius temperature to Fahrenheit.

(1) convertToF(0) should return a number
(2) convertToF(-30) should return a value of -22
(3) convertToF(-10) should return a value of 14
(4) convertToF(0) should return a value of 32
(5) convertToF(20) should return a value of 68
(6) convertToF(30) should return a value of 86
*/

function convertToF(celsius) {
    return (celsius * 9 / 5) + 32;
}

convertToF(30);