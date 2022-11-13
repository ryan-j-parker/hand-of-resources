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

  static async getZodiac() {
    const { rows } = await pool.query('SELECT * from chinese_zodiac');
    return rows.map((zodiac) => new Zodiac(zodiac));
  }

  static async getZodiacById(id) {
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
};
