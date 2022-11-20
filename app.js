const express = require("express")
// const mongoCleint = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
app.use(bodyParser.json())
const get = require("./controllers/get.controller")
const add = require("./controllers/add.controller")
app.use(express.static(path.join(__dirname, "assets")))
app.set("view engine", "ejs")
app.set("views", "views")
app.get("/", get.getAll)
app.get("/scholars", get.scholars)
app.get("/moshaf", get.moshaf)
app.get("/anashid", get.getAnashid)
app.get("/articles", get.getArticles)
app.get("/lessons", get.getLessons)
app.get("/photos", get.getPhotos)
app.get("/scholar/:id", get.getScholar)
app.get("/photos/:id", get.getOnePhoto)
app.use("/subject/:id/:type/:typeid", get.getInScholar)
app.use("/add/zizo/2009741852", add.goAdd)
app.post("/addMan", bodyParser.urlencoded({ extended: true }), add.addMan)
app.post("/addinMan", bodyParser.urlencoded({ extended: true }), add.addInMan)
app.use((req, res, next) => {
    res.status(404).render("404", {
        path: req.path
    })
})
app.listen(process.env.PORT || 7070, () => {
    console.log("go")
})
