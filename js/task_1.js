// console.log(calculateFirstTask(5));

function calculateFirstTask(n) {
    let result = 0;
    if (n <= 0) {
        return "n is not natural number";
    }
    for (let i = 1; i <= n; i++) {
        let temp = 1;
        for (let j = 1; j < i; j++) {
            temp *= i + j;
        }
        result += i * temp * 2 * i;
    }
    return result;
}