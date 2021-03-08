function sumSquareDifference(n) {

    // sum of squares without for loop
    let sumOfSquares = n * (n + 1) * (2 * n + 1) / 6

    // square of the sum without for loop
    let squareOfSum = ((n * (n + 1)) / 2) ** 2

    return squareOfSum - sumOfSquares
}

console.log(sumSquareDifference(20));