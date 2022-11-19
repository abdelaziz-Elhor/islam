const Scholar = require("../models/scholar.model");
const Anashid = require("../models/nashids.model");
const Article = require("../models/articles.model");
const Audio = require("../models/audios.model");
const Lesson = require("../models/lessons.model");
const Moshaf = require("../models/msahf.model");

let url = "mongodb+srv://zizoBoy:741852@islam-data.iovdiwe.mongodb.net/all-data?retryWrites=true&w=majority"

const mongoose = require("mongoose");
const mongodb = require("mongodb");

exports.getAll = (req, res, next) => {
    res.render("index")
}
exports.scholars = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.find({}, (err, scholars) => {

            mongoose.disconnect()
            res.render("scholars", {
                data: scholars,
            })
        })

    })
}
exports.getScholar = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.findOne({ _id: req.params.id }, (err, scholar) => {
            Lesson.find({ teacherId: req.params.id }, (err, lessons) => {
                Anashid.find({ teacherId: req.params.id }, (err, anashid) => {
                    Audio.find({ teacherId: req.params.id }, (err, audios) => {
                        Article.find({ teacherId: req.params.id }, (err, articles) => {
                            res.render("scholar", {
                                scholar: scholar,
                                audios: audios,
                                lessons: lessons,
                                articles: articles,
                                anashid: anashid
                            })
                        })
                    })
                })
            })

        })


    })



}

exports.getInScholar = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        let type;
        if (req.params.type == "lessons") { type = Lesson } else
            if (req.params.type == "audios") { type = Audio } else
                if (req.params.type == "articles") { type = Article } else
                    if (req.params.type == "anashid") { type = Anashid }
        type.findOne({ _id: req.params.typeid }, (err, subject) => {

            Scholar.findOne({ _id: req.params.id }, (err, man) => {

                res.render("subject", {
                    subject: subject,
                    man: man,
                    type: req.params.type
                })
            })
        })

    })

}
exports.goAdd = (req, res, next) => {
    res.render("add")

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

exports.moshaf = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Moshaf.find({}, (err, msahf) => {

            mongoose.disconnect()
            res.render("moshaf", {
                data: msahf,
            })
        })
    })

}
exports.getAnashid = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Anashid.find({}, (err, data) => {

            mongoose.disconnect()
            res.render("anashid", {
                data: data,
            })
        })
    })

}
exports.getAudios = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Audio.find({}, (err, data) => {

            mongoose.disconnect()
            res.render("audios", {
                data: data,
            })
        })
    })

}
exports.getArticles = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Article.find({}, (err, data) => {

            mongoose.disconnect()
            res.render("articles", {
                data: data,
            })
        })
    })

}

exports.getLessons = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Lesson.find({}, (err, data) => {

            mongoose.disconnect()
            res.render("lessons", {
                data: data,
            })
        })
    })
}