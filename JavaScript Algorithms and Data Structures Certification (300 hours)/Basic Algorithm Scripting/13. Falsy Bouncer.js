/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

(1) bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
(2) bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
(3) bouncer([false, null, 0, NaN, undefined, ""]) should return [].
(4) bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
*/

function bouncer(arr) {
    return arr.filter(a => {
        if (!(!!a === 'false')) { // convert falsy values to boolean
            return a;
        }
    });
}

console.log(bouncer([7, "ate", "", false, 9]));