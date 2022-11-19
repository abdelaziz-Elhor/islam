const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, text: String, date: String, teacherId: String })
let Article = mongoose.model("article", schema)
module.exports = Article;
