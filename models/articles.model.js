const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, text: String, image: String, date: String, teacherId: String, teacherName: String })
let Article = mongoose.model("article", schema)
module.exports = Article;
