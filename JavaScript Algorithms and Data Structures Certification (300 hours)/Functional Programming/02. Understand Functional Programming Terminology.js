/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology

Prepare 27 cups of green tea and 13 cups of black tea and store 
them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. 
Note that the getTea function has been modified so it now takes a function 
as the first argument.

Note: The data (the number of cups of tea) is supplied as the last argument. 
We'll discuss this more in later lessons.

(1) The tea4GreenTeamFCC variable should hold 27 cups of green tea for the team.
(2) The tea4GreenTeamFCC variable should hold cups of green tea.
(3) The tea4BlackTeamFCC variable should hold 13 cups of black tea.
(4) The tea4BlackTeamFCC variable should hold cups of black tea.
*/

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// Add your code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
