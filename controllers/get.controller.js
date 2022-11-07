const Scholar = require("../models/scholar.model");
const Moshaf = require("../models/msahf.model");

let url = "mongodb+srv://zizoBoy:741852@islam-data.iovdiwe.mongodb.net/all-data?retryWrites=true&w=majority"

const mongoose = require("mongoose");

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

            mongoose.disconnect()
            res.render("scholar", {
                scholar: scholar
            })
        })

    })



}

exports.getInScholar = (req, res, next) => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        Scholar.findOne({ _id: req.params.id }, (err, user) => {
            console.log(req.params.id, req.params.type, req.params.typeid, req.params[0])
            let subject = user[req.params.type].find(e => e.id == req.params.typeid)
            console.log(subject)
            res.render("subject", {
                subject: subject,
                man: user,
                type: req.params.type
            })
            mongoose.disconnect()

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