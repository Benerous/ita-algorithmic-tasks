// console.log(marsennePrime(150));

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