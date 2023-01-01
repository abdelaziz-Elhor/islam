const mongoose = require("mongoose")
let schema = mongoose.Schema({ time: String, path: String, date: String, })
let Visits = mongoose.model("visit", schema)
module.exports = Visits;
