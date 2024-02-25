const port = 3000;
const express = require("express");
const { NotFoundHandler } = require("../../Utils/NotFoundHandler");
const { ErrorHandler } = require("../../Utils/ErrorHandler");
const fileUpload = require("express-fileupload");

const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/showImage", express.static("008_uploadFile/fileupload/uploads"))
app.use(fileUpload())


// دریافت فایل با استفاده از بافر
app.post("/upload-buffer", (req, res) => {
    const image = req.files.image;
    const ext = path.extname(image.name);
    const destinationPath = path.join(__dirname, "uploads", Date.now() + ext);
    const buffer = Buffer.from(image.data)
    fs.writeFileSync(destinationPath, buffer)
    res.send(req.files)
})



// دریافت فایل با استفاده از mv
app.post("/upload-mv", (req, res) => {
    const image = req.files.image;
    const ext = path.extname(image.name);
    const destinationPath = path.join(__dirname, "uploads", Date.now() + ext);
    image.mv(destinationPath, (err) => {
        if (err) res.send(err)
    })
    res.send(req.files)
})



// دریافت گروهی فایل ها با استفاده از mv
// اگر کلید فایل ها با هم برابر باشه با این کدها نمیتونی کارو دربیاری . چون اون موقع فایل ها به صورت آرایه ارسال میشن ولی الان چون یه دونست تو آبجکت بهمون میده
app.post("/upload-mv-many", async (req, res, next) => {
    try {
        for(let key in req.files) {
            const files = req.files[key];
            const ext = path.extname(files.name);
            const destinationPath = path.join(__dirname, "uploads", Date.now() + ext);

            // بدون در نظر گرفتن احتیاط
            // files.mv(destinationPath, (err) => {
            //     if (err) res.send(err)
            // })


            // ممکنه این کد بعضی وقتا به مشکل بخوره . دلیلش هم اینه که این کد باید به صورت پرامیس اجرا بشه .
            // ما برای احتیاط از پرامیس برای این قسمت هم میتونیم استفاده کنیم
            const result = await new Promise((resolve, reject) => {
                files.mv(destinationPath, (err) => {
                    if (err) reject(err);
                    else resolve(true)
                })
            })
        }
        res.send(req.files)
    } catch (error) {
        next(error)
    }
})





app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})