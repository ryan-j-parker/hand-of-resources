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

  it('POST /planets should add a new planet to database', async () => {
    const planetX = {
      name: 'Planet X',
      mass: 0.0999,
      radius: 0.0999,
      period: 99999,
      temperature: 2,
    };
    const res = await request(app).post('/planets').send(planetX);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "10",
        "mass": "0.099900",
        "name": "Planet X",
        "period": "99999",
        "radius": "0.0999",
        "temperature": 2,
      }
    `);
  });

  it('PUT /planets/9 should update planet with ID #9', async () => {
    const res = await request(app).put('/planets/9').send({
      name: 'Alien Home Planet',
      mass: 0.99822,
      radius: 0.0034,
      period: 332,
      temperature: 43,
    });
    expect(res.status).toBe(200);
  });

  it('DELETE /planets/:id should delete a planet', async () => {
    const res = await request(app).delete('/planets/9');
    expect(res.status).toEqual(200);
    const { planet } = await request(app).get('/planets/9');
    expect(planet).toEqual(undefined);
  });

  afterAll(() => {
    pool.end();
  });
});
