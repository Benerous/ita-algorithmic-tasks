// 559
// Дано натуральне число n. Знайти всі числа Мерсена які менші за дане число n. 
// (Просте число називається числом Мерсена, якщо його можна подати у такому вигляді: 
// 2^p - 1, де p - також просте число).

function marsennePrime(n) {
    const result = [];
    let i = 0;
    if (n <= 0) {
        return "n is not natural number";
    }
    while (true) {
        if (isPrime(i)) {
            let temp = Math.pow(2, i) - 1;
            if (isPrime(temp)) {
                if (temp > n) {
                    break;
                }
                result.push(temp);
            }
        }
        i++;
    }
    return result;
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(marsennePrime(1000));

module.exports = {marsennePrime};
