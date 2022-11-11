const pool = require('../utils/pool');

module.exports = class Cat {
  constructor(row) {
    this.id = row.id;
    this.breed = row.breed;
    this.playfulness = row.playfulness;
    this.intelligence = row.intelligence;
    this.origin = row.origin;
    this.health = row.health;
    this.shedding = row.shedding;
    this.pet_friendly = row.petFriendly;
  }

  static async getCats() {
    const { rows } = await pool.query('SELECT * from cats');
    return rows.map((cat) => new Cat(cat));
  }
};
