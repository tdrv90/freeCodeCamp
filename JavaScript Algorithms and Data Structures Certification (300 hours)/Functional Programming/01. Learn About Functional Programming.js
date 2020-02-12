/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming

The members of freeCodeCamp happen to love tea.

In the code editor, the prepareTea and getTea functions are already
defined for you. Call the getTea function to get 40 cups of tea for the team,
and store them in the tea4TeamFCC variable.

(1) The tea4TeamFCC variable should hold 40 cups of tea for the team.
(2) The tea4TeamFCC variable should hold cups of green tea.
*/

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); //

// Add your code above this line

console.log(tea4TeamFCC);
