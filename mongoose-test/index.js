const mongoose = require("mongoose");

// Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Create Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

// Create Document
const student1 = new Student({
  name: "Ashfaq",
  age: 22,
});

// Save Document
student1
  .save()
  .then(() => {
    console.log("Data Saved");
  })
  .catch((err) => {
    console.log(err);
  });
