const express = require("express");
const app = express();

app.use(express.json());
let users = [
  { id: 1, name: "Ashfaq", age: 22 },
  { id: 2, name: "Mahroof", age: 22 },
  { id: 3, name: "Adnan", age: 22 },
  { id: 4, name: "Shahid", age: 22 },
  { id: 5, name: "Adil", age: 21 },
  { id: 6, name: "Irfad", age: 21 },
  { id: 7, name: "Samith", age: 22 },
  { id: 8, name: "Thasmeer", age: 21 },
];

//GET -> get data
app.get("/users", (req, res) => {
  res.json(users);
});

//GET single user (dynamic routing)
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) return res.send("User not found!");
  res.json(user);
});

//POST -> create user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);
  res.send("User added");
});

//PUT -> update user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    user.age = req.body.age;
    res.send("User updated");
  } else {
    res.send("User not found");
  }
});

//DELETE -> delete user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.send("User deleted");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
