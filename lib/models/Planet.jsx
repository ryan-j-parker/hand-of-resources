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

  static async getPlanets() {
    const { rows } = await pool.query('SELECT * from planets');
    return rows.map((planet) => new Planet(planet));
  }
};
