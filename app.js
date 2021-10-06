const express = require("express");
const bodyParser = require("body-parser");

const todoListRoute = require("./routes/TodoList");
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  next();
});
app.use("/todolist", todoListRoute);

app.listen(8080);

module.exports = app;
