const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/Cat');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /cats should return a list of cat breeds', async () => {
    const res = await request(app).get('/cats');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "breed": "Abyssinian",
          "id": "1",
          "intelligence": 5,
          "origin": "Southeast Asia",
          "playfulness": 5,
        },
        Object {
          "breed": "Russian Blue",
          "id": "2",
          "intelligence": 4,
          "origin": "Archangel Islands, Russia",
          "playfulness": 2,
        },
        Object {
          "breed": "Scottish Fold",
          "id": "3",
          "intelligence": 4,
          "origin": "Tayside, Scotland",
          "playfulness": 3,
        },
        Object {
          "breed": "British Shorthair",
          "id": "4",
          "intelligence": 3,
          "origin": "Great Britain",
          "playfulness": 2,
        },
        Object {
          "breed": "Ragdoll",
          "id": "5",
          "intelligence": 4,
          "origin": "Riverside, California",
          "playfulness": 4,
        },
        Object {
          "breed": "Sphynx",
          "id": "6",
          "intelligence": 4,
          "origin": "Canada",
          "playfulness": 4,
        },
        Object {
          "breed": "Burmese",
          "id": "7",
          "intelligence": 5,
          "origin": "Burma and Thailand",
          "playfulness": 5,
        },
        Object {
          "breed": "Maine Coon",
          "id": "8",
          "intelligence": 4,
          "origin": "Maine, USA",
          "playfulness": 4,
        },
      ]
    `);
  });

  it('GET /cats/1 should return a cat breed by ID', async () => {
    const res = await request(app).get('/cats/1');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: '1',
      breed: 'Abyssinian',
      playfulness: 5,
      intelligence: 5,
      origin: 'Southeast Asia',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
