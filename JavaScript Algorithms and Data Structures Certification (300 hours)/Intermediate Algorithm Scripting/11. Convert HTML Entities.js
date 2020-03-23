/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

(1) convertHTML("Dolce & Gabbana") 
    should return Dolce &amp; Gabbana.
(2) convertHTML("Hamburgers < Pizza < Tacos") 
    should return Hamburgers &lt; Pizza &lt; Tacos.
(3) convertHTML("Sixty > twelve") 
    should return Sixty &gt; twelve.
(4) convertHTML('Stuff in "quotation marks"') 
    should return Stuff in &quot;quotation marks&quot;.
(5) convertHTML("Schindler's List") 
    should return Schindler&apos;s List.
(6) convertHTML("<>") 
    should return &lt;&gt;.
(7) convertHTML("abc") 
    should return abc.
*/

function convertHTML(str) {
    const entitiesMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    const regex = /([&<>\"'])/g;

    return str.replace(regex, match => entitiesMap[match]);
}

console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana