const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('planets routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /planets should return a list of planets', async () => {
    const res = await request(app).get('/planets');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: '1',
      name: 'Mercury',
      mass: 0.000174,
      radius: 0.0341,
      period: 88,
      temperature: 400,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
