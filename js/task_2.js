// 117 a)
// Дано натуральне число n. Вирахувати перших n множників: 1/2 * 3/4 * 5/6 * ...

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