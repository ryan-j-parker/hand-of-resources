const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('planets routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /planets should return a list of planets', async () => {
    const res = await request(app).get('/planets');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "mass": "0.000174",
          "name": "Mercury",
          "period": "88",
          "radius": "0.0341",
          "temperature": 400,
        },
        Object {
          "id": "2",
          "mass": "0.002570",
          "name": "Venus",
          "period": "225",
          "radius": "0.0847",
          "temperature": 737,
        },
        Object {
          "id": "3",
          "mass": "0.003150",
          "name": "Earth",
          "period": "365",
          "radius": "0.0892",
          "temperature": 288,
        },
        Object {
          "id": "4",
          "mass": "0.000338",
          "name": "Mars",
          "period": "687",
          "radius": "0.0488",
          "temperature": 210,
        },
        Object {
          "id": "5",
          "mass": "1.000000",
          "name": "Jupiter",
          "period": "4331",
          "radius": "1.0000",
          "temperature": 165,
        },
        Object {
          "id": "6",
          "mass": "0.299000",
          "name": "Saturn",
          "period": "10747",
          "radius": "0.8430",
          "temperature": 134,
        },
        Object {
          "id": "7",
          "mass": "0.045600",
          "name": "Uranus",
          "period": "30589",
          "radius": "0.3580",
          "temperature": 76,
        },
        Object {
          "id": "8",
          "mass": "0.053700",
          "name": "Neptune",
          "period": "59800",
          "radius": "0.3460",
          "temperature": 72,
        },
        Object {
          "id": "9",
          "mass": "0.000007",
          "name": "Pluto",
          "period": "90560",
          "radius": "0.0166",
          "temperature": 44,
        },
      ]
    `);
  });

  it('GET /planets/1 should return planet with ID #1', async () => {
    const res = await request(app).get('/planets/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'Mercury');
    expect(res.body).toHaveProperty('temperature', 400);
  });

  afterAll(() => {
    pool.end();
  });
});
