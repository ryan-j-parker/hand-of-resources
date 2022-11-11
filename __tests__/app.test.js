const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cat breeds', async () => {
    const res = await request(app).get('/cats');
    // const expected = {
    //   breed: expect.any(String),
    //   playfulness: expect.any(Number),
    //   intelligence: expect.any(Number),
    //   health: expect.any(Number),
    //   shedding: expect.any(Number),
    //   pet_friendly: expect.any(Number),
    // };
    // expect(res.body).toEqual(expected);
    expect (res.body.length).toEqual(8);
    const abyssinian = res.body.find((cat) => cat.id === '1');
    expect(abyssinian).toHaveProperty('breed', 'Abyssinian');
    expect(abyssinian).toHaveProperty('playfulness', 5);
  });
  
  afterAll(() => {
    pool.end();
  });
});
