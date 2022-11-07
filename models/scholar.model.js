const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, image: String, lessons: Array, audios: Array, articles: Array, anashid: Array, discr: String, })
let Scholar = mongoose.model("scholar", schema)
module.exports = Scholar;
