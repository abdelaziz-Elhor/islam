const Scholar = require("../models/scholar.model");
const Anashid = require("../models/nashids.model");
const Article = require("../models/articles.model");

const Lesson = require("../models/lessons.model");
const Moshaf = require("../models/msahf.model");
const Photos = require("../models/photos.model");

let url = "mongodb+srv://zizoBoy:741852@islam-data.iovdiwe.mongodb.net/all-data?retryWrites=true&w=majority"

const mongoose = require("mongoose");

exports.goAdd = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.find({}, (err, scholars) => {

            mongoose.disconnect()
            res.render("add", {
                mans: scholars
            })
        })

    })

}
exports.addMan = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        let newScholar = new Scholar({
            name: req.body.name,
            image: req.body.image,
            discr: req.body.discr,
        })
        newScholar.save((err, resu) => {
            res.redirect("/")
        })
    })

}
exports.addInMan = (req, res, next) => {
    let type;
    let d = new Date()
    let e = req.body
    e.date = d.toLocaleDateString()
    if (e.type == "lessons") { type = Lesson } else
        if (e.type == "articles") { type = Article } else
            if (e.type == "photos") { type = Photos } else
                if (e.type == "anashid") { type = Anashid }
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        let newthing = new type(e)
        newthing.save((err, resu) => {
            res.redirect("/")
        })
    })
}