require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({ message: "New Student Created", data: student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true },
    );
    res.status(200).json({ updatedStudent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findOneAndDelete({
      id: req.params.id,
    });
    res.status(200).json({ message: "Stdent deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
