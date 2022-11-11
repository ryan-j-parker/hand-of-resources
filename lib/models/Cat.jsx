const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  breed;
  playfulness;
  intelligence;
  origin;
  
  constructor(row) {
    this.id = row.id;
    this.breed = row.breed;
    this.playfulness = row.playfulness;
    this.intelligence = row.intelligence;
    this.origin = row.origin;
  }

  static async getCats() {
    const { rows } = await pool.query('SELECT * from cats');
    return rows.map((cat) => new Cat(cat));
  }

  static async getCatById(id) {
    const { rows } = await pool.query(
      `
    SELECT * from cats 
    WHERE 
    id = $1
    `,
      [id]
    );
    return new Cat(rows[0]);
  }
};
