import express from "express";
import { createTable } from "./db/scripts/createTable.js";
import { populateTable } from "./db/scripts/populateTable.js";
import { getTable } from "./db/scripts/getTable.js";
import { getStatus, updateTask } from "./db/scripts/getStatus.js";
// import "dotenv/config";
import cors from "cors";

//import router from express.Router();//
const app = express();
app.use(express.json());
app.use(cors());
/* app.get("/", (req, res, next) => {
  res.render("index", { title: "that is your app" })
  next();
});
*/

// 1. GET ALL TABLE
app.get("/", async (req, res) => {
  const response = await getTable();
  res.json(response);
});

// 2. CREATE TABLE
app.post("/", async (req, res) => {
  const response = await createTable(req.body);
  res.json(response);
});

app.post("/", async (req, res) => {
  const response = await populateTable(req.body);
  res.json(response);
});

// 3. TOGGLE THE STATUS IN THE TABLE
app.patch("/:id", async (req, res) => {
  let id = req.params.id
  const responseRows = await getStatus(id);
  const task = responseRows[0];
  task.status = !task.status;
  // [...data.slice(0,0), {...data[0], status: !(data[0].status) }];
  // //data[0].status = !(data[0].status)
  // console.log('This is the status ' + data[0].status);
  console.log(task);

// just before returning the data, we need to update it in the database
  await updateTask(id, task)

  res.json(task);
});

// 4. DELETE ITEM IN THE TABLE
app.delete("/:id", async (req, res) => {
  const response = await deleteItem(req.params.id);
  res.json(response);
});
console.log("Is it Working?");
//module.exports = router;//
export default app;
