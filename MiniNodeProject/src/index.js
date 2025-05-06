const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const route = require("../src/Routes/itemRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/app", route);

app.get("/text", (req, res) => {
  res.send("Welcome to 8001 !");
  l, console.log(process.env);
});

const PORT = process.env.DB_PORT;
app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
