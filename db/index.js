import pg from "pg";
// import "dotenv/config";
// import { databaseHost, databaseName, password, username } from "../config.js";

const pool = new pg.Pool({
  connectionString:
    "postgres://widktucdvzrhhq:0bbe45d8c6595de3e251e5df49a1117ad92231d475fda1e0947f660f44b2c6ba@ec2-54-195-246-55.eu-west-1.compute.amazonaws.com:5432/deoq6o1kkmh5rf",
  // user: process.env.PGUSER,
  // host: process.env.PGHOST,
  // password: process.env.PGPASSWORD,
  // database: process.env.PGDATABASE,
  // port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
