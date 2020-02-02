// Make the promise handle success and failure. If responseFromServer is true, 
// call the resolve method to successfully complete the promise. 
// Pass resolve a string with the value We got the data. If responseFromServer 
// is false, use the reject method instead and pass it the string: 
// Data not received.

// resolve should be executed when the if condition is true.
// reject should be executed when the if condition is false.


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
