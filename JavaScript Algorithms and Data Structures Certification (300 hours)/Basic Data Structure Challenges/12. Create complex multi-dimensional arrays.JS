/* We have defined a variable, myNestedArray, set equal to an array.
Modify myNestedArray, using any combination of strings, numbers, and booleans
for data elements, so that it has exactly five levels of depth (remember,
the outer-most array is level 1). Somewhere on the third level,
include the string 'deep', on the fourth level, include the string 'deeper',
and on the fifth level, include the string 'deepest'.

(1) myNestedArray should contain only numbers, booleans, and strings as
data elements
(2) myNestedArray should have exactly 5 levels of depth
(3) myNestedArray should contain exactly one occurrence of the string
"deep" on an array nested 3 levels deep
(4) myNestedArray should contain exactly one occurrence of the string
"deeper" on an array nested 4 levels deep
(5) myNestedArray should contain exactly one occurrence of the string
"deepest" on an array nested 5 levels deep */

let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    [['deep'], 'concat', false, true, 'spread', 'array'], // 3rd lvl
    ['mutate', 1327.98, [['deeper']], 'splice', 'slice', 'push'], // 4th lvl
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',
        [[['deepest']]]] // 5th lvl
    // change code above this line
];