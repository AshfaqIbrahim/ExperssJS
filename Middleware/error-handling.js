const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Ashfaq" },
  { id: 2, name: "Ibrahim" },
];

app.get("/users/:id", (req, res, next) => {
  const user = users.find((u) => u.id == req.params.id);

  if (user) {
    return res.json(user);
  } else {
    return next(new Error("User not found"));
  }
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error: ", err.message);

  res.status(404).send(err.message);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
