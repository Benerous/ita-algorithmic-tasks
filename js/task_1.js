// 109
// Дано натуральне число n. Вирахувати 1*2 + 2*3*4 + 3*4*5*6 + ... + n*(n+1)*...*2n

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