import pg from "pg";
// import "dotenv/config";
// import { databaseHost, databaseName, password, username } from "../config.js";

const pool = new pg.Pool({
  connectionString:
    "postgres://eqwtnurqrllkwl:2e14765ea824f5d2a1c527fb7703372012698adc8b5aecc55b97fa27219e6644@ec2-52-31-219-113.eu-west-1.compute.amazonaws.com:5432/d6gpjci143n2le",
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
