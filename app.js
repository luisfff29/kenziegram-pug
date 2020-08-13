const express = require("express");
const fs = require("fs");
const multer = require("multer");
const pug = require("pug");

const path = "./public/uploads";
const app = express();
const port = 3000;
templates = {
    titleHeader: "Kenziegram Project",
    title: "KenzieGram",
};
const upload = multer({ dest: path });

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./public"));

fs.readdir(path, (err, files) => {
    templates.pics = files;
});

app.get("/", (req, res) => {
    res.render("index", templates);
});

app.post("/upload", upload.single("myImage"), (req, res, next) => {
    templates.pics.unshift(req.file.filename);
    templates.pic_uploaded = req.file.filename;
    res.render("upload", templates);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
