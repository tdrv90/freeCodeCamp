/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has 
the format of a valid US number. The following are examples of valid formats 
for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 
8oo-six427676;laskdjf. Your job is to validate or reject the US phone number 
based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm 
that the country code is 1. Return true if the string is a valid 
US phone number; otherwise return false.

(01) telephoneCheck("555-555-5555") should return a boolean.
(02) telephoneCheck("1 555-555-5555") should return true.
(03) telephoneCheck("1 (555) 555-5555") should return true.
(04) telephoneCheck("5555555555") should return true.
(05) telephoneCheck("555-555-5555") should return true.
(06) telephoneCheck("(555)555-5555") should return true.
(07) telephoneCheck("1(555)555-5555") should return true.
(08) telephoneCheck("555-5555") should return false.
(09) telephoneCheck("5555555") should return false.
(10) telephoneCheck("1 555)555-5555") should return false.
(11) telephoneCheck("1 555 555 5555") should return true.
(12) telephoneCheck("1 456 789 4444") should return true.
(13) telephoneCheck("123**&!!asdf#") should return false.
(14) telephoneCheck("55555555") should return false.
(15) telephoneCheck("(6054756961)") should return false
(16) telephoneCheck("2 (757) 622-7382") should return false.
(17) telephoneCheck("0 (757) 622-7382") should return false.
(18) telephoneCheck("-1 (757) 622-7382") should return false
(19) telephoneCheck("2 757 622-7382") should return false.
(20) telephoneCheck("10 (757) 622-7382") should return false.
(21) telephoneCheck("27576227382") should return false.
(22) telephoneCheck("(275)76227382") should return false.
(23) telephoneCheck("2(757)6227382") should return false.
(24) telephoneCheck("2(757)622-7382") should return false.
(25) telephoneCheck("555)-555-5555") should return false.
(26) telephoneCheck("(555-555-5555") should return false.
(27) telephoneCheck("(555)5(55?)-5555") should return false.
*/

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));