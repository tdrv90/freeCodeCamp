/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

Usernames are used everywhere on the internet. 
They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules 
that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. 
There can be zero or more of them at the end. 
Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters as characters.



Change the regex userCheck to fit the constraints listed above.

(01) Your regex should match JACK
(02) Your regex should not match J
(03) Your regex should match Jo
(04) Your regex should match Oceans11
(05) Your regex should match RegexGuru
(06) Your regex should not match 007
(07) Your regex should not match 9
(08) Your regex should not match A1
(09) Your regex should not match BadUs3rnam3
(10) Your regex should match Z97
(11) Your regex should not match c57bT3
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

console.log(result);