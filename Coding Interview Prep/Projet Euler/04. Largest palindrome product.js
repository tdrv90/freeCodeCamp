function largestPalindromeProduct(n) {
    const max = Number("9".repeat(n))
    const min = Number(1 + "0".repeat(n - 1))
    
    let result = [];

    for (let i = max; i >= min; i--) {
        for (let j = max; j >= min; j--) {
            let num = i * j;

            let reversedNum = String(num).split("").reverse().join("");

            if (num == reversedNum) {
                result.push(num);
                break;
            }
        }
    }

    return Math.max(...result);
}

console.log(largestPalindromeProduct(2)) // 9009