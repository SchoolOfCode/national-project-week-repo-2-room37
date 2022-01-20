import query from "../index.js";
import data from "../../data.js";

export async function populateTable() {
  for (let i = 0; i < data.length; i++) {
    const { title, date, repo, status } = data[i];
    const res = await query(
      `INSERT INTO socTasks(title, date, repo, status) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, date, repo, status]
    );
    console.log("Table populated", res);
  }
}

// populateTable();
