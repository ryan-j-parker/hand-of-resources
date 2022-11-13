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

  static async insert(gang) {
    const { rows } = await pool.query(
      `
        INSERT INTO gangs_of_ny (name, formed, dissolved, member, territory, makeup)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
      [
        gang.name,
        gang.formed,
        gang.dissolved,
        gang.member,
        gang.territory,
        gang.makeup,
      ]
    );
    return new Gang(rows[0]);
  }

  static async update(id, newAttrs) {
    const gang = Gang.getGangById(id);
    if (!gang) return null;
    const updatedGang = { ...gang, ...newAttrs };
    const { rows } = await pool.query(
      `
        UPDATE gangs_of_ny
        SET name = $2, formed = $3, dissolved = $4, member = $5, territory = $6, makeup = $7
        WHERE id = $1
        RETURNING *
        `,
      [
        id,
        updatedGang.name,
        updatedGang.formed,
        updatedGang.dissolved,
        updatedGang.member,
        updatedGang.territory,
        updatedGang.makeup,
      ]
    );
    return new Gang(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE from gangs_of_ny
        WHERE id = $1
        RETURNING *
        `,
      [id]
    );
    return new Gang(rows[0]);
  }
};
