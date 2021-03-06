function fiboEvenSum(n) {
    const collection = []

    function fibonacci(n) {
        var a = 1, b = 0, temp;

        while (n >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            n--;
            collection.push(b)
        }

        return collection;
    }

    fibonacci(n)

    return collection
        .filter((x) => x % 2 == 0 && x <= n)
        .reduce((a, b) => a + b)
}


console.log(fiboEvenSum(10)) // 10
console.log(fiboEvenSum(34)) // 44
console.log(fiboEvenSum(60)) // 44
console.log(fiboEvenSum(1000)) // 798