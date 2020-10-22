const {marsennePrime} = require('./task_3');

test(
    'calculateSecondTask should return mult of members 1/2 * 3/4 * 5/6 * ...',
    () => {
        // expect(calculateSecondTask(10)).toBe('n is not natural number');
        // expect(calculateSecondTask(-2)).toBe('n is not natural number');
        expect(marsennePrime(10)).toBe(Array[3, 7]);
    }
)