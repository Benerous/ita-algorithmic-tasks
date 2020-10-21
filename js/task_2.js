// console.log(calculateSecondTask(5));

function calculateSecondTask(n) {
    let result = 1;
    if (n <= 0) {
        return "n is not natural number";
    }
    for (let i = 0; i < n; i++) {
        let temp = i + i + 1;
        result *= temp / (temp + 1);
    }
    return result;
}