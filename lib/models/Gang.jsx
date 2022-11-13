const pool = require('../utils/pool');

module.exports = class Gang {
  id;
  name;
  formed;
  dissolved;
  member;
  territory;
  makeup;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.formed = row.formed;
    this.dissolved = row.dissolved;
    this.member = row.member;
    this.territory = row.territory;
    this.makeup = row.makeup;
  }

  static async getGangs() {
    const { rows } = await pool.query('SELECT * from gangs_of_ny');
    return rows.map((gang) => new Gang(gang));
  }

  static async getGangById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from gangs_of_ny
        WHERE id = $1
        `,
      [id]
    );
    return new Gang(rows[0]);
  }
};
