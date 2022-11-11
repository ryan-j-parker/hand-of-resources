const pool = require('../utils/pool');
const { insert } = require('./Cat');

module.exports = class Planet {
  id;
  name;
  mass;
  radius;
  period;
  temperature;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.mass = row.mass;
    this.radius = row.radius;
    this.period = row.period;
    this.temperature = row.temperature;
  }

  static async getPlanets() {
    const { rows } = await pool.query('SELECT * from planets');
    return rows.map((planet) => new Planet(planet));
  }

  static async getPlanetById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from planets 
        WHERE 
        id = $1
        `,
      [id]
    );
    return new Planet(rows[0]);
  }

  static async insert(planet) {
    const { rows } = await pool.query(
      `
        INSERT INTO planets (name, mass, radius, period, temperature)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `,
      [
        planet.name,
        planet.mass,
        planet.radius,
        planet.period,
        planet.temperature,
      ]
    );
    return new Planet(rows[0]);
  }
};
