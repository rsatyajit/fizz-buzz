const request = require('supertest')
const app = require('../app');
describe('get fizz buzz results', () => {
    it('should get results successfully', async () => {
        let low = 1, high = 10, statusCode = 201;
        let expected = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz"];
        const res = await request(app)
            .get(`/api/user/fizz-buzz?high=${high}&low=${low}`)

        expect(res.statusCode).toEqual(statusCode)
        expect(res.body).toHaveProperty("message", "successfully fetched");
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty("_status_code", statusCode);
        expect(res.body).toHaveProperty("result", expected);
    });

    it('should throw error - higher limit greater than lower', async () => {
        let low = 10, high = 1, statusCode = 401;
        const res = await request(app)
            .get(`/api/user/fizz-buzz?high=${high}&low=${low}`)
        expect(res.statusCode).toEqual(statusCode)
        expect(res.body).toHaveProperty("message", "higher limit should be greater than lower limit");
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty("_status_code", statusCode);
    });
})