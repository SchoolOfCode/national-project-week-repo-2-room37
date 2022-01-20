import query from "../index.js";

const sqlString = `SELECT * FROM socTasks`;

export async function getTable() {
  const response = await query(sqlString);
  console.log("This is your table", response.rows);
  return response.rows;
}
