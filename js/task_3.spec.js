const {marsennePrime} = require('./task_3');

test(
    'calculateSecondTask should return number of marsenne',
    () => {
        expect(marsennePrime(10)).toEqual(expect.arrayContaining([3, 7]));
        expect(marsennePrime(0)).toBe('n is not natural number');
        expect(marsennePrime(-2)).toBe('n is not natural number');
    }
)