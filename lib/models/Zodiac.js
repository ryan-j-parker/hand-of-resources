const pool = require('../utils/pool');

module.exports = class Zodiac {
  id;
  animal;
  yin_yang;
  trine;
  element;
  year;

  constructor(row) {
    this.id = row.id;
    this.animal = row.animal;
    this.yinyang = row.yinyang;
    this.trine = row.trine;
    this.element = row.element;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from chinese_zodiac');
    return rows.map((zodiac) => new Zodiac(zodiac));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from chinese_zodiac
        WHERE id = $1
        `,
      [id]
    );
    return new Zodiac(rows[0]);
  }

  static async insert(zodiac) {
    const { rows } = await pool.query(
      `
        INSERT INTO chinese_zodiac (animal, yinyang, trine, element, year)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `,
      [zodiac.animal, zodiac.yinyang, zodiac.trine, zodiac.element, zodiac.year]
    );
    return new Zodiac(rows[0]);
  }

  static async update(id, newAttrs) {
    const zodiac = Zodiac.getById(id);
    if (!zodiac) return null;
    const updatedZodiac = { ...zodiac, ...newAttrs };
    const { rows } = await pool.query(
      `
    UPDATE chinese_zodiac
    SET animal = $2, yinyang = $3, trine = $4, element = $5, year = $6
    WHERE id = $1
    RETURNING *
    `,
      [
        id,
        updatedZodiac.animal,
        updatedZodiac.yinyang,
        updatedZodiac.trine,
        updatedZodiac.element,
        updatedZodiac.year,
      ]
    );
    return new Zodiac(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE from chinese_zodiac
        WHERE id = $1
        RETURNING * 
        `,
      [id]
    );
    return new Zodiac(rows[0]);
  }
};
