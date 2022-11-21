const Scholar = require("../models/scholar.model");
const Anashid = require("../models/nashids.model");
const Article = require("../models/articles.model");

const Lesson = require("../models/lessons.model");
const Moshaf = require("../models/msahf.model");
const Photos = require("../models/photos.model");
const Quotes = require("../models/quotes.model");
const Complaints = require("../models/complaints.model");

let url = "mongodb+srv://zizoBoy:741852@islam-data.iovdiwe.mongodb.net/all-data?retryWrites=true&w=majority"

const mongoose = require("mongoose");
const mongodb = require("mongodb");

exports.getAll = (req, res, next) => {
    res.render("index", {
        path: "/"
    })

}
exports.scholars = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.find({}, (err, scholars) => {

            scholars.sort(function (a, b) {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            });
            res.render("scholars", {
                data: scholars,
                path: req.path
            })
            mongoose.disconnect()


        })

    })
}
exports.getScholar = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.findOne({ _id: req.params.id }, (err, scholar) => {
            Lesson.find({ teacherId: req.params.id }, (err, lessons) => {
                Anashid.find({ teacherId: req.params.id }, (err, anashid) => {
                    Article.find({ teacherId: req.params.id }, (err, articles) => {
                        res.render("scholar", {
                            scholar: scholar,
                            lessons: lessons,
                            articles: articles,
                            anashid: anashid,
                            path: req.path
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
                    type: req.params.type,
                    path: req.path
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


            res.redirect("/add/zizo/2009741852")
        })
    })

}

exports.moshaf = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Moshaf.find({}, (err, msahf) => {

            mongoose.disconnect()
            res.render("moshaf", {
                data: msahf,
                path: req.path
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
                path: req.path
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
                path: req.path
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
                path: req.path
            })
        })
    })
}
exports.getPhotos = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Photos.find({}, (err, data) => {

            mongoose.disconnect()
            res.render("photos", {
                data: data,
                path: req.path
            })
        })
    })
}
exports.getQuotes = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Quotes.find({}, (err, data) => {
            mongoose.disconnect()
            res.render("quotes", {
                data: data,
                path: req.path
            })
        })
    })
}
exports.getComplaints = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Complaints.find({}, (err, data) => {
            mongoose.disconnect()
            res.render("complaints", {
                data: data,
                path: req.path
            })
        })
    })
}
exports.getOnePhoto = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Photos.findOne({ _id: req.params.id }, (err, data) => {

            mongoose.disconnect()
            res.render("photo", {
                data: data,
                path: "/photos"
            })
        })
    })
}