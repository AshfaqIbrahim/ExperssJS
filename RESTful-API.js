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

//GET all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//GET single user
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

//POST
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);

  res.status(201).json({
    message: "New user created",
  });
});

//PUT
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (user) {
    user.name = req.body.name;
    user.age = req.body.age;
    res.status(200).json({ message: "User updated successfuly", data: user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//DELETE
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);

  res.status(200).json({ message: "User deleted successfuly" });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
