
const countModel = require('../model/count.model');

describe('fizz buzz', () => {
    it('matches fizz buzz results', () => {
        let high = 10, low = 1;
        let expected = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz"];
        const res = countModel.fizzBuzzCount(low, high);
        expect(res).toEqual(expect.arrayContaining(expected));
    });

    it('not matches fizz buzz results and normal array', () => {
        let high = 10, low = 1;
        let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const res = countModel.fizzBuzzCount(low, high);
        expect(res).not.toEqual(expect.arrayContaining(expected));
    });

})