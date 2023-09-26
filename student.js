const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
  name: String,
  grid: Number,
  course: String,
  email: String,
});

let student = mongoose.model("Students", studentschema);

module.exports = student;
