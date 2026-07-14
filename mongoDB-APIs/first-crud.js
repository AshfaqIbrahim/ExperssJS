require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Creating Schema
const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
});

//Creating Model
const Student = mongoose.model("Student", studentSchema);

//GET
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({
      message: err.messsage,
    });
  }
});

//Creating First API (POST)
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//PUT and PATCH has same code, unless you want to use replaceOne() or findOneAndReplace() with PUT to make PUT behave differntly
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true },
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//DELETE
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findOneAndDelete({
      id: req.params.id,
    });
    res.status(200).json({
      message: "Student Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Starting server
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
