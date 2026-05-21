// const express = require("express");
// const app = express();

// //to render HTML inside views folder/index.ejs
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   console.log("Hey there!");
//   res.send("Hey everyone");
//   // //to render HTML inside views folder/index.ejs
//   // res.render("index",{text:"World"});
// });

// app.get("/users", (req, res) => {
//   res.send("User List");
// });

// app.listen(3000);

// //
// //route parameter
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/users/:userId", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`<h1>User Profile</h1><p>User ID: ${userId}</p>`);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });