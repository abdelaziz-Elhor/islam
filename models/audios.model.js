const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, urls: Array, date: String, teacherId: String, teacherName: String })
let Audio = mongoose.model("audio", schema)
module.exports = Audio;
