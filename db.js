// const Pool = require"pg".Pool;
import testPool from "pg";
const Pool = testPool.Pool;

const pool = new Pool({
  user: "postgres",
  password: "gres@!21",
  port: 5432,
  database: "floormate_db",
});

export function getTestData() {
  return pool.query("SELECT * FROM addstuff");
}

export function getEstimatesData() {
  return pool.query("SELECT * FROM addstuff");
}
