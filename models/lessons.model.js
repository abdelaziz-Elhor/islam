const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, url: String, date: String, teacherId: String })
let Lesson = mongoose.model("lesson", schema)
module.exports = Lesson;
