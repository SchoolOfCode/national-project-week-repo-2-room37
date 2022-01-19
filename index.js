import express from "express";

//import router from express.Router();//
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.listen(PORT, function (req, res) {
  console.log(`This server is listening to the port ${PORT}`);
});

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

//module.exports = router;//
