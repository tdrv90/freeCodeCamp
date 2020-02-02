// Add the catch method to your promise. Use error as the parameter of its
//callback function and log error to the console.

// You should call the catch method on the promise.
// Your catch method should have a callback function with error as its 
// parameter.
// You should log error to the console.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});