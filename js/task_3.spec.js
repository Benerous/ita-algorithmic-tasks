const {marsennePrime} = require('./task_3');

test(
    'calculateSecondTask should return number of marsenne',
    () => {
        expect(marsennePrime(10)).toBe([3, 7]);
    }
)