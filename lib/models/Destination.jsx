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

  static async update(id, newAttrs) {
    const destination = Destination.getDestinationById(id);
    if (!destination) return null;
    const updatedDestination = { ...destination, ...newAttrs };
    const { rows } = await pool.query(
      `
        UPDATE destinations
        SET country = $2, monthly_expenses = $3, language = $4, income_req = $5, visa_cost = $6
        WHERE id = $1
        RETURNING *
        `,
      [
        id,
        updatedDestination.country,
        updatedDestination.monthly_expenses,
        updatedDestination.language,
        updatedDestination.income_req,
        updatedDestination.visa_cost,
      ]
    );
    return new Destination(rows[0]);
  }
};
