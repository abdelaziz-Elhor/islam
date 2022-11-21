const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, image: String, discr: String })
let Scholar = mongoose.model("teacher", schema)
module.exports = Scholar;