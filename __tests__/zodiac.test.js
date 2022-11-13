const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /zodiac should return a list of chinese zodiac signs', async () => {
    const res = await request(app).get('/zodiac');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "animal": "Rat",
          "element": "Water",
          "id": "1",
          "trine": 1,
          "year": "02-02-1984 - 02-19-1985",
          "yinyang": "Yang",
        },
        Object {
          "animal": "Ox",
          "element": "Earth",
          "id": "2",
          "trine": 2,
          "year": "02-20-1985 - 02-08-1986",
          "yinyang": "Yin",
        },
        Object {
          "animal": "Tiger",
          "element": "Wood",
          "id": "3",
          "trine": 3,
          "year": "02-09-1986 - 01-28-1987",
          "yinyang": "Yang",
        },
        Object {
          "animal": "Rabbit",
          "element": "Wood",
          "id": "4",
          "trine": 4,
          "year": "01-29-1987 - 02-16-1988",
          "yinyang": "Yin",
        },
        Object {
          "animal": "Dragon",
          "element": "Earth",
          "id": "5",
          "trine": 1,
          "year": "02-17-1988 - 02-05-1989",
          "yinyang": "Yang",
        },
        Object {
          "animal": "Snake",
          "element": "Fire",
          "id": "6",
          "trine": 2,
          "year": "02-06-1989 - 01-26-1990",
          "yinyang": "Yin",
        },
        Object {
          "animal": "Horse",
          "element": "Fire",
          "id": "7",
          "trine": 3,
          "year": "01-27-1990 - 02-14-1991",
          "yinyang": "Yang",
        },
        Object {
          "animal": "Goat",
          "element": "Earth",
          "id": "8",
          "trine": 4,
          "year": "02-15-1991 - 02-03-1992",
          "yinyang": "Yin",
        },
        Object {
          "animal": "Monkey",
          "element": "Metal",
          "id": "9",
          "trine": 1,
          "year": "02-04-1992 - 01-22-1993",
          "yinyang": "Yang",
        },
        Object {
          "animal": "Rooster",
          "element": "Metal",
          "id": "10",
          "trine": 2,
          "year": "01-23-1993 - 02-09-1994",
          "yinyang": "Yin",
        },
        Object {
          "animal": "Dog",
          "element": "Earth",
          "id": "11",
          "trine": 3,
          "year": "02-10-1994 - 01-30-1995",
          "yinyang": "Yang",
        },
        Object {
          "animal": "Pig",
          "element": "Water",
          "id": "12",
          "trine": 4,
          "year": "01-31-1995 - 02-18-1996",
          "yinyang": "Yin",
        },
      ]
    `);
  });

  it.skip('GET /zodiac/1 should return zodiac sign with ID #1', async () => {
    const res = await request(app).get('/zodiac/1');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: '1',
      animal: 'Rat',
      yinyang: 'Yang',
      trine: 1,
      element: 'Water',
      year: '02-02-1984 - 02-19-1985',
    });
  });

  it.skip('POST /zodiac should add a new zodiac sign to database', async () => {
    const mouse = {
      animal: 'Mouse',
      yinyang: 'Yin and Yang',
      trine: 1,
      element: 'Catness',
      year: '03-18-2013 - always',
    };
    const res = await request(app).post('/zodiac').send(mouse);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "animal": "Mouse",
        "element": "Catness",
        "id": "13",
        "trine": 1,
        "year": "03-18-2013 - always",
        "yinyang": "Yin and Yang",
      }
    `);
  });

  it.skip('PUT /zodiac/1 should update cat with ID #1', async () => {
    const res = await request(app).put('/zodiac/1').send({
      animal: 'Frog',
      yinyang: 'Yin',
      trine: 3,
      element: 'Water',
      year: '02-12-1983 - 03-22-2092',
    });
    expect(res.status).toBe(200);
  });

  it.skip('DELETE /zodiac/12 should delete zodiac with ID #12', async () => {
    const res = await request(app).delete('/zodiac/12');
    expect(res.status).toBe(204);

    const getRes = await request(app).get('/zodiac/12');
    expect(getRes.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
