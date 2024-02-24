const express = require("express");
const { ErrorHandler } = require("../Utils/ErrorHandler");
const { NotFoundHandler } = require("../Utils/NotFoundHandler");
const app = express()
const port = 3000;

// برای مدیریت روت هایی که نداریم میتونیم یه میدلویر در انتهای صفحه ست کنیم تا اگر مسیری پیدا نشد اون میدلویر اجرا بشه

["route_1", "route_2", "route_3", "Route_4"].map(route => {
    app.get(`/${route}`, (req, res) => {
        res.status(200).send({data: route})
    })
})


app.get("/any", (req, res, next) => {

    // console.log(name)
    // res.status(200).send("any")

    // یا 

    try {
        console.log(name)
        // یا حتی میشه به صورت دستی ارور ایجاد کرد
        throw new Error("create error foe example")
        res.status(200).send("any")
    } catch (err) {
        next(err)
    }
})


// اگر روت مورد نظر پیدا نشه این میدلویر اجرا میشه
app.use(NotFoundHandler)


// اگر برنامه به ارور بخوره این میدلویر اجرا میشه
// برای انقال اررو به این میدلویر میتونیم تو قسمت روت از ترای کچ هم استفاده کنیم و تو قیمت کچ ارور رو به نکست به این میدلویر پاس بدیم
app.use(ErrorHandler)


// میتونیم برای تمام این میدلویر ها یه یوتیلز بنویسیم تا هرجا که خواستیم بتونیم داشون بزنیم
app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})
