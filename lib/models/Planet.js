const pool = require('../utils/pool');

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

  static async getAll() {
    const { rows } = await pool.query('SELECT * from planets');
    return rows.map((planet) => new Planet(planet));
  }

  static async getById(id) {
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

  static async update(id, newAttrs) {
    const planet = Planet.getById(id);
    if (!planet) return null;
    const updatedPlanet = { ...planet, ...newAttrs };
    const { rows } = await pool.query(
      `
        UPDATE planets
        SET name = $2, mass = $3, radius = $4, period = $5, temperature = $6
        WHERE id = $1
        RETURNING *
        `,
      [
        id,
        updatedPlanet.name,
        updatedPlanet.mass,
        updatedPlanet.radius,
        updatedPlanet.period,
        updatedPlanet.temperature,
      ]
    );
    return new Planet(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE from planets
        WHERE id = $1
        RETURNING *    
        `,
      [id]
    );
    return new Planet(rows[0]);
  }
};
