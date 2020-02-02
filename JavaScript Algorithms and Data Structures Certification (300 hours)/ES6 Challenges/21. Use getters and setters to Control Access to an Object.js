// Use the class keyword to create a Thermostat class. 
// The constructor accepts a Fahrenheit temperature.

// Now create a getter and a setter in the class, to obtain the temperature 
// in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is 
// the value of temperature in Fahrenheit, and C is the value of the same 
// temperature in Celsius.

// Note: When you implement this, you will track the temperature inside 
// the class in one scale, either Fahrenheit or Celsius.

// This is the power of a getter and a setter. You are creating an API 
// for another user, who can get the correct result regardless of which 
// one you track.

// In other words, you are abstracting implementation details from the user.

// Thermostat should be a class with a defined constructor method.
// class keyword should be used.
// Thermostat should be able to be instantiated.
// A getter should be defined.
// A setter should be defined.
// Calling the setter should set the temperature.


/* Alter code below this line */
class Thermostat {
    constructor(farenheit) {
        this.farenheit = farenheit;
    }

    get temperature() {
        return 5 / 9 * (this.farenheit - 32);
    }

    set temperature(celsius) {
        this.farenheit = (celsius * 9.0 / 5 + 32);
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C