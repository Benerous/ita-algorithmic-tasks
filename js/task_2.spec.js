const {calculateSecondTask} = require('./task_2');

test(
    'calculateSecondTask should return mult of members 1/2 * 3/4 * 5/6 * ...',
    () => {
        expect(calculateSecondTask(1)).toBe(0.5);
        expect(calculateSecondTask(2)).toBe(0.375);
        expect(calculateSecondTask(0)).toBe('n is not natural number');
        expect(calculateSecondTask(-2)).toBe('n is not natural number');
    }
)