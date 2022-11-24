const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, url: String, date: String, teacherId: String, teacherName: String })
let Books = mongoose.model("book", schema)
module.exports = Books;
