const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Ashfaq", age: 22 },
  { id: 2, name: "Rahul", age: 25 },
];

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id); // route param
  const age = req.query.age; // query param

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.send("User not found");
  }

  // simple query check
  if (age && user.age != age) {
    return res.send("Age not matching");
  }

  res.send(user);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
