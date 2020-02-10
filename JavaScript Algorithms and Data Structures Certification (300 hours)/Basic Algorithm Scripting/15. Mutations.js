/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

Return true if the string in the first element of the array contains all of
the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello"
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in
"line" are present in "Alien".

(01) mutation(["hello", "hey"]) should return false.
(02) mutation(["hello", "Hello"]) should return true.
(03) mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
(04) mutation(["Mary", "Army"]) should return true.
(05) mutation(["Mary", "Aarmy"]) should return true.
(06) mutation(["Alien", "line"]) should return true.
(07) mutation(["floor", "for"]) should return true.
(08) mutation(["hello", "neo"]) should return false.
(09) mutation(["voodoo", "no"]) should return false.
(10) mutation(["ate", "date"] should return false.
(11) mutation(["Tiger", "Zebra"]) should return false.
(12) mutation(["Noel", "Ole"]) should return true.
*/

function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split('')
        .every((l) => {
            return arr[0].toLowerCase().indexOf(l) != -1;
        });
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "hello"])); // true