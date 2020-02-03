/* We have defined a function spreadOut that returns the variable sentence. 
Modify the function using the spread operator so that it returns 
the array ['learning', 'to', 'code', 'is', 'fun'].

(1) spreadOut should return ["learning", "to", "code", "is", "fun"]
(2) The spreadOut function should utilize spread syntax */

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
    return sentence;
}

// do not change code below this line
console.log(spreadOut());
