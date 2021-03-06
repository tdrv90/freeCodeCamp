function multiplesOf3and5(number) {
    const multiplesOfThreeAndFive = []

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0) {
            multiplesOfThreeAndFive.push(i)
        }
    }

    for (let i = 1; i < number; i++) {
        if (i % 5 === 0) {
            multiplesOfThreeAndFive.push(i)
        }
    }

    const uniqueValues = [...new Set(multiplesOfThreeAndFive)]
    return uniqueValues.reduce((a, b) => a + b)
}

console.log(multiplesOf3and5(49)) // 543
console.log(multiplesOf3and5(1000)) // 233168
