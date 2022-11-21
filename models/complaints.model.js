const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, url: String, date: String, text: String })
let Complaints = mongoose.model("complaint", schema)
module.exports = Complaints;
