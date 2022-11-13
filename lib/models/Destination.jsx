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
}
