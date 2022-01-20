import express from "express";
import { createTable } from "./db/scripts/createTable.js";
import { populateTable } from "./db/scripts/populateTable.js";
import { getTable } from "./db/scripts/getTable.js";
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

// 3. REPLACE ITEM IN THE TABLE
app.put("/:id", async (req, res) => {
  const response = await replaceItem(req.body, req.params.id);
  res.json(response);
});

// 4. DELETE ITEM IN THE TABLE
app.delete("/:id", async (req, res) => {
  const response = await deleteItem(req.params.id);
  res.json(response);
});
console.log("Is it Working?");
//module.exports = router;//
export default app;
