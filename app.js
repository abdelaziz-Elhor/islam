const express = require("express")
// const mongoCleint = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
app.use(bodyParser.json())
const controller = require("./controllers/get.controller")
app.use(express.static(path.join(__dirname, "assets")))
app.set("view engine", "ejs")
app.set("views", "views")
app.get("/", controller.getAll)
app.get("/scholars", controller.scholars)
app.get("/moshaf", controller.moshaf)
app.get("/scholar/:id", controller.getScholar)
app.use("/subject/:id/:type/:typeid", controller.getInScholar)
app.use("/add", controller.goAdd)
app.post("/addMan", bodyParser.urlencoded({ extended: true }), controller.addMan)
app.use((req, res, next) => {
    res.status(404).render("404", {
        path: req.path
    })

})
app.listen(process.env.PORT || 7070, () => {
    console.log("go")
})
