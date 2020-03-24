/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to 
the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays 
are grouped into one encapsulating array.

(1) pairElement("ATCGA") should return 
    [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
(2) pairElement("TTGAG") should return 
    [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
(3) pairElement("CTCTA") should return 
    [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
    const output = [];

    const pairsMap = {
        'A': ['A', 'T'],
        'T': ['T', 'A'],
        'C': ['C', 'G'],
        'G': ['G', 'C'],
    }

    str.split('')
        .forEach(el => {
            output.push(pairsMap[el]);
        });

    return output;
}

console.log(pairElement("GCG"));
// [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

console.log(pairElement("ATCGA"));
// [ [ 'A', 'T' ],
//   [ 'T', 'A' ],
//   [ 'C', 'G' ],
//   [ 'G', 'C' ],
//   [ 'A', 'T' ] ]