/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

(01) convertToRoman(2) should return "II".
(02) convertToRoman(3) should return "III".
(03) convertToRoman(4) should return "IV".
(04) convertToRoman(5) should return "V".
(05) convertToRoman(9) should return "IX".
(06) convertToRoman(12) should return "XII".
(07) convertToRoman(16) should return "XVI".
(08) convertToRoman(29) should return "XXIX".
(09) convertToRoman(44) should return "XLIV".
(10) convertToRoman(45) should return "XLV"
(11) convertToRoman(68) should return "LXVIII"
(12) convertToRoman(83) should return "LXXXIII"
(13) convertToRoman(97) should return "XCVII"
(14) convertToRoman(99) should return "XCIX"
(15) convertToRoman(400) should return "CD"
(16) convertToRoman(500) should return "D"
(17) convertToRoman(501) should return "DI"
(18) convertToRoman(649) should return "DCXLIX"
(19) convertToRoman(798) should return "DCCXCVIII"
(20) convertToRoman(891) should return "DCCCXCI"
(21) convertToRoman(1000) should return "M"
(22) convertToRoman(1004) should return "MIV"
(23) convertToRoman(1006) should return "MVI"
(24) convertToRoman(1023) should return "MXXIII"
(25) convertToRoman(2014) should return "MMXIV"
(26) convertToRoman(3999) should return "MMMCMXCIX"
*/

function convertToRoman(num) {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let output = "";

    for (let i = 0; i < decimal.length; i++) {
        while (decimal[i] <= num) {
            output += roman[i];
            num -= decimal[i];
        }
    }

    return output;
}

console.log(convertToRoman(36));