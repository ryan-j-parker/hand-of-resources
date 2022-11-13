const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('destination routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /destinations should return a list of digital expat destinations', async () => {
    const res = await request(app).get('/destinations');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "country": "Costa Rica",
          "id": "1",
          "income_req": 3000,
          "language": "Spanish",
          "monthly_expenses": 1300,
          "visa_cost": 190,
        },
        Object {
          "country": "Malta",
          "id": "2",
          "income_req": 2750,
          "language": "Maltese, English",
          "monthly_expenses": 1400,
          "visa_cost": 305,
        },
        Object {
          "country": "Greece",
          "id": "3",
          "income_req": 3565,
          "language": "Greek",
          "monthly_expenses": 1050,
          "visa_cost": 76,
        },
        Object {
          "country": "Mexico",
          "id": "4",
          "income_req": 2730,
          "language": "Spanish",
          "monthly_expenses": 875,
          "visa_cost": 190,
        },
        Object {
          "country": "Portugal",
          "id": "5",
          "income_req": 717,
          "language": "Portuguese",
          "monthly_expenses": 1350,
          "visa_cost": 77,
        },
        Object {
          "country": "Estonia",
          "id": "6",
          "income_req": 3568,
          "language": "Estonian",
          "monthly_expenses": 1205,
          "visa_cost": 81,
        },
        Object {
          "country": "Croatia",
          "id": "7",
          "income_req": 2400,
          "language": "Croatian",
          "monthly_expenses": 1050,
          "visa_cost": 180,
        },
        Object {
          "country": "Saint Lucia",
          "id": "8",
          "income_req": 0,
          "language": "English, French Creole",
          "monthly_expenses": 1400,
          "visa_cost": 46,
        },
        Object {
          "country": "Brazil",
          "id": "9",
          "income_req": 1500,
          "language": "Portuguese",
          "monthly_expenses": 750,
          "visa_cost": 100,
        },
        Object {
          "country": "Mauritius",
          "id": "10",
          "income_req": 1500,
          "language": "Mauritian Creole, English, French",
          "monthly_expenses": 900,
          "visa_cost": 0,
        },
      ]
    `);
  });

  it('GET /destinations/1 should return destination with ID #1', async () => {
    const res = await request(app).get('/destinations/1');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: '1',
      country: 'Costa Rica',
      monthly_expenses: 1300,
      language: 'Spanish',
      income_req: 3000,
      visa_cost: 190,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
