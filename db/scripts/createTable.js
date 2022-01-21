import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS socTasks(id SERIAL PRIMARY KEY, title TEXT, date TEXT, status BOOL, repo TEXT)`;

export async function createTable() {
  const response = await query(sqlString);
  console.log("created a table", response);
  return response;
}

//createTable();
