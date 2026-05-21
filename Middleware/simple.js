const express = require("express");
const app = express();

//Middleware
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

//Route
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
 