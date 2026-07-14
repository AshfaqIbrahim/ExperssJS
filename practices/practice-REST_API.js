// const express = require("express");
// const app = express();

// app.use(express.json());
// let users = [
//   { id: 1, name: "Ashfaq", age: 22 },
//   { id: 2, name: "Mahroof", age: 22 },
//   { id: 3, name: "Adnan", age: 22 },
//   { id: 4, name: "Shahid", age: 22 },
//   { id: 5, name: "Adil", age: 21 },
//   { id: 6, name: "Irfad", age: 21 },
//   { id: 7, name: "Samith", age: 22 },
//   { id: 8, name: "Thasmeer", age: 21 },
// ];

// //get all user
// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

// //get single user
// app.get("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);

//   if (!user) {
//     res.status(404).json({ message: "User not found" });
//   }
//   res.status(200).json(user);
// });

// //post
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     age: req.body.age,
//   };

//   users.push(newUser);
//   res.json(201).json({ message: "New user added" });
// });

// app.put("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);

//   if (user) {
//     user.name = req.body.name;
//     user.age = req.body.age;

//     res.status(200).json({ message: "User updated successfully", data: user });
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// app.delete("/users/:id", (req, res) => {
//   users = users.filter((u) => u.id != req.params.id);

//   res.status(200).json({ message: "User deleted successfully" });
// });

// app.listen(3000, () => {
//   console.log("http://localhost:3000");
// });


