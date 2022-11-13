const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('gangs routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /gangs should return a list of 19th C. NY gangs', async () => {
    const res = await request(app).get('/gangs');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "dissolved": 1850,
          "formed": 1825,
          "id": "1",
          "makeup": "Irish",
          "member": "Edward Coleman",
          "name": "Forty Thieves",
          "territory": "Lower East Side",
        },
        Object {
          "dissolved": 1865,
          "formed": 1830,
          "id": "2",
          "makeup": "American Nativists",
          "member": "Mike Walsh",
          "name": "Bowery Boys",
          "territory": "The Bowery",
        },
        Object {
          "dissolved": 1890,
          "formed": 1860,
          "id": "3",
          "makeup": "Irish",
          "member": "Danny Lyons",
          "name": "Whyos",
          "territory": "The Bowery",
        },
        Object {
          "dissolved": 1859,
          "formed": 1845,
          "id": "4",
          "makeup": "Juveniles",
          "member": "Nicholas Saul",
          "name": "Daybreak Boys",
          "territory": "Manhattan Waterfront",
        },
        Object {
          "dissolved": 1865,
          "formed": 1834,
          "id": "5",
          "makeup": "Irish, Irish-American",
          "member": "Hell-cat Maggie",
          "name": "Dead Rabbits",
          "territory": "Five Points",
        },
        Object {
          "dissolved": 1890,
          "formed": 1880,
          "id": "6",
          "makeup": "Irish",
          "member": "unknown",
          "name": "Short Tails",
          "territory": "Corlears Hook",
        },
        Object {
          "dissolved": 1912,
          "formed": 1890,
          "id": "7",
          "makeup": "Jewish-American",
          "member": "Monk Eastman",
          "name": "Eastman Gang",
          "territory": "Lower East Side",
        },
      ]
    `);
  });

  it('GET /gangs/1 should return the NY gang with ID #1', async () => {
    const res = await request(app).get('/gangs/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'Forty Thieves');
    expect(res.body).toHaveProperty('formed', 1825);
  });

  afterAll(() => {
    pool.end();
  });
});
