const pool = require('../utils/pool');

module.exports = class Destination {
  id;
  country;
  monthly_expenses;
  language;
  income_req;
  visa_cost;

  constructor(row) {
    this.id = row.id;
    this.country = row.country;
    this.monthly_expenses = row.monthly_expenses;
    this.language = row.language;
    this.income_req = row.income_req;
    this.visa_cost = row.visa_cost;
  }

  static async getDestinations() {
    const { rows } = await pool.query('SELECT * from destinations');
    return rows.map((destination) => new Destination(destination));
  }

  static async getDestinationById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from destinations
        WHERE
        id = $1
        `,
      [id]
    );
    return new Destination(rows[0]);
  }

  static async insert(dest) {
    const { rows } = await pool.query(
      `
        INSERT INTO destinations (country, monthly_expenses, language, income_req, visa_cost)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `,
      [
        dest.country,
        dest.monthly_expenses,
        dest.language,
        dest.income_req,
        dest.visa_cost,
      ]
    );
    return new Destination(rows[0]);
  }
};
