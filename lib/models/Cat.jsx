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

  static async insert(cat) {
    const { rows } = await pool.query(
      `
    INSERT INTO cats (breed, playfulness, intelligence, origin)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
      [cat.breed, cat.playfulness, cat.intelligence, cat.origin]
    );
    return new Cat(rows[0]);
  }

  static async update(id, newAttrs) {
    const cat = Cat.getCatById(id);
    if (!cat) return null;
    const updatedCat = { ...cat, ...newAttrs };
    const { rows } = await pool.query(
      `
        UPDATE cats
        SET breed = $2, playfulness = $3, intelligence = $4, origin = $5
        WHERE id = $1
        RETURNING *    
    `,
      [
        id,
        updatedCat.breed,
        updatedCat.playfulness,
        updatedCat.intelligence,
        updatedCat.origin,
      ]
    );
    return new Cat(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE from cats
        WHERE id = $1
        RETURNING *
        `,
      [id]
    );
    return new Cat(rows[0]);
  }
};
