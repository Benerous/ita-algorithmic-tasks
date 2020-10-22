const {calculateFirstTask} = require('./task_1');

test(
    'calculateFirstTask should return sum of members 1*2 + 2*3*4 + ... + n(n+1)...2n',
    () => {
        expect(calculateFirstTask(3)).toBe(386);
        expect(calculateFirstTask(4)).toBe(7106);
        expect(calculateFirstTask(0)).toBe('n is not natural number');
        expect(calculateFirstTask(-2)).toBe('n is not natural number');
    }
)

