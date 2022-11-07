const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, discr: String, audios: Array, })
let Moshaf = mongoose.model("msahf", schema)
module.exports = Moshaf;
