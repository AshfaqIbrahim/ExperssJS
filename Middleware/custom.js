const express = require("express");
const app = express();


const checkUser = (req, res, next) => {
  //custom middleware function
  const isLoggedIn = false;

  if (isLoggedIn) {
    next();
  } else {
    res.send("Please login first!");
  }
};

app.get("/profile", checkUser, (req, res) => {
  res.send("Welcome to your profile");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

