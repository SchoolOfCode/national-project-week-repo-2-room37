import query from "../index.js";

const sqlString = `DROP TABLE socTasks`;

export async function dropTable() {
  const response = await query(sqlString);
  console.log("dropped a table", response);
  return response;
}

dropTable();
