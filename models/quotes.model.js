const mongoose = require("mongoose")
let schema = mongoose.Schema({ name: String, text: String, date: String, })
let Quotes = mongoose.model("quote", schema)
module.exports = Quotes;
