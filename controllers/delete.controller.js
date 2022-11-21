const Scholar = require("../models/scholar.model");
const Anashid = require("../models/nashids.model");
const Article = require("../models/articles.model");

const Lesson = require("../models/lessons.model");
const Moshaf = require("../models/msahf.model");
const Photos = require("../models/photos.model");
const Quotes = require("../models/quotes.model");

let url = "mongodb+srv://zizoBoy:741852@islam-data.iovdiwe.mongodb.net/all-data?retryWrites=true&w=majority"

const mongoose = require("mongoose");


exports.deleteMan = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.findByIdAndRemove(req.params.id).then(err => {
            res.redirect("/add/zizo/2009741852")
        })

    })

}
exports.deleteInMan = (req, res, next) => {
    let type;
    if (req.params.type == "lessons") { type = Lesson } else
        if (req.params.type == "articles") { type = Article } else
            if (req.params.type == "photos") { type = Photos } else
                if (req.params.type == "anashid") { type = Anashid }
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        type.findByIdAndRemove(req.params.id).then(err => {
            console.log(err)
            res.redirect("/add/zizo/2009741852")
        })
    })
}
exports.addQuotes = (req, res, next) => {
    let d = new Date()
    let e = req.body
    e.date = d.toLocaleDateString()
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        let newquotes = new Quotes(e)
        newquotes.save((err, resu) => {
            res.redirect("/quotes")
        })
    })
}
