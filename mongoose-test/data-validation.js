const mongoose = require("mongoose");
require("dotenv").config();

//Connect mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema with validation
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 60,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

// Create Document
const student1 = new Student({
  name: "Mahroof",
  age: 22,
  gender: "Male",
  email: "mahroof@gmail.com",
});

//Save Document
student1
  .save()
  .then(() => {
    console.log("Data saved");
  })
  .catch((err) => {
    console.log(err);
  });
