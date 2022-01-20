import express from "express";
let router = express.Router();
//import router from express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//module.exports = router;
