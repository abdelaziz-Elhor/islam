const Scholar = require("../models/scholar.model");
const Anashid = require("../models/nashids.model");
const Article = require("../models/articles.model");

const Lesson = require("../models/lessons.model");
const Moshaf = require("../models/msahf.model");
const Photos = require("../models/photos.model");
const Quotes = require("../models/quotes.model");
const Complaints = require("../models/complaints.model");
const Books = require("../models/books.model");

let url = "mongodb+srv://zizoBoy:741852@islam-data.iovdiwe.mongodb.net/all-data?retryWrites=true&w=majority"

const mongoose = require("mongoose");

exports.goAdd = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.find({}, (err, scholars) => {
            Anashid.find({}, (err, anashid) => {
                Article.find({}, (err, article) => {
                    Lesson.find({}, (err, lesson) => {
                        Photos.find({}, (err, photos) => {
                            mongoose.disconnect()
                            res.render("add", {
                                mans: scholars,
                                anashid: anashid,
                                articles: article,
                                lessons: lesson,
                                photos: photos,
                            })
                        })
                    })
                })
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
            res.redirect("/add/zizo/2009741852")
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
                if (e.type == "book") { type = Books } else
                    if (e.type == "anashid") { type = Anashid }
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        let newthing = new type(e)
        console.log(e)
        newthing.save((err, resu) => {
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
exports.addComplaint = (req, res, next) => {
    let d = new Date()
    let e = req.body
    e.date = d.toLocaleDateString()
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        let newquotes = new Complaints(e)
        newquotes.save((err, resu) => {
            res.redirect("/")
        })
    })
}
