const port = 3000;
const express = require("express")
const app = express()
const {NotFoundHandler} = require("../../Utils/NotFoundHandler")
const {ErrorHandler} = require("../../Utils/ErrorHandler")
const multer = require("multer");
const { fileValidate } = require("./middleware/multer.middleware");
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/showImage", express.static(`008_uploadFile/multer/uploads`)) // برای نمایس عکس های موجودر در دایرکتوری پروژه به صورت استاتیک

// برای ارسال یک عکس یا فایل
app.post("/upload-single", fileValidate.single("image"), (req, res) => {
    res.send(req.file)
})


// برای ارسال چند عکس یا غایل
app.post("/upload-array", fileValidate.array("image", 5), (req, res) => {
    res.send(req.files)
})



// برای ارسال چند عکس و فایل با هم
app.post("/upload-fields", fileValidate.fields([
    {name: "image", maxCount: 4},
    {name: "file", maxCount: 2},
]), (req, res) => {
    res.send(req.files)
})



// برای ارسال هرچیزی با هر تعدادی 
app.post("/upload-any", fileValidate.any([
    {name: "image", maxCount: 4},
    {name: "file", maxCount: 2},
]), (req, res) => {
    res.send(req.files)
})


// برای زمانی که از form data استفاده میکنیم و لارمه که اطلاعات رو پارس کنیم
app.post("/upload-none", fileValidate.none("image"), (req, res) => {
    res.send(req.body)
})



app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})