const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, url: String, date: String, teacherId: String })
let Anashid = mongoose.model("anashid", schema)
module.exports = Anashid;
