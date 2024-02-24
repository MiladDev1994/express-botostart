const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `008_uploadFile/multer/uploads`);
    },
    filename: (req, file, cb) => {

        // برای نوشتن ولیدین کافیه اطلاعات داخل file رو بخونیم و براشون شرط بنویسیم
        const ext = path.extname(file.originalname);
        const fileName = Date.now() + ext
        cb(null, fileName)

        // برای ایجاد ارور  به صورت دستی
        // cb(new Error("file not valid")) 
    }
})

const fileValidate = multer({
    storage,
    limits: 500000 * 10 // یعنی زیر 5 میگ باشه
})

module.exports = {
    fileValidate
}