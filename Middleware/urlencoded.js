const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Home page with form
app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="username" placeholder="Enter name">
      <button type="submit">Send</button>
    </form>
  `);
});

// Form submit route
app.post("/submit", (req, res) => {
  console.log(req.body);

  res.send(`Hello ${req.body.username}`);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
