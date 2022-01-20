import pg from "pg";
// import "dotenv/config";
// import { databaseHost, databaseName, password, username } from "../config.js";

const pool = new pg.Pool({
<<<<<<< HEAD
<<<<<<< HEAD
  connectionString: process.env.PGSTRING,

=======
=======
>>>>>>> parent of 9f5f3d6 (added connectionString)
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: 5432,
<<<<<<< HEAD
>>>>>>> parent of 9f5f3d6 (added connectionString)
=======
>>>>>>> parent of 9f5f3d6 (added connectionString)
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
