const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, image: String, date: String, })
let Photos = mongoose.model("photo", schema)
module.exports = Photos;
