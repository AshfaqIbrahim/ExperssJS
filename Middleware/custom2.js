const express = require("express");
const app = express();

//Custom middleware function
const logger = (req, res, next) => {
  console.log(`Mehtod: ${req.method} \nUrl: ${req.url} \nToday: ${new Date()}`);
  next();
};

//Route
app.get("/users", logger, (req, res) => {
  res.send("User page");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
