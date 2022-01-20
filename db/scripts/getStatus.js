import query from "../index.js";


export async function getStatus(id) {
  const response = await query(`SELECT * FROM socTasks WHERE id = $1;`, [id] );
  return response.rows;
}

export async function updateTask(id, task) {
  await query(`UPDATE socTasks SET date = $1, title = $2, status = $3, repo = $4 WHERE id = $5`,
   [task.date, task.title, task.status, task.repo, id])
}