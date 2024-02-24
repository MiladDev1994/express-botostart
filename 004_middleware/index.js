const express = require("express")
const app = express()
const port = 3000;

// روش تعریف کردن میدلویر برای تمام روت ها به این صورته
// ناگفته نمونه که ترتیب نوشتن میدلویر ها در اجراشون تاثیر داره

app.use((req, res, next) => {
    console.log("middleware_1");
    next()
})

app.use((req, res, next) => {
    console.log("middleware_2");
    next()
})

app.use((req, res, next) => {
    console.log("middleware_3");
    next()
})

app.use((req, res, next) => {
    console.log("middleware_4");
    next()
})

// به صورت یکجا هم میشه اضافه کرد
app.use(
    (req, res, next) => {
        console.log("middleware_5");
        next()
    },
    (req, res, next) => {
        console.log("middleware_6");
        next()
    },
    (req, res, next) => {
        console.log("middleware_7");
        next()
    },
    (req, res, next) => {
        console.log("middleware_8");
        next()
    },
)

app.get("/public_middleware", (req, res) => {
    console.log("response")
    res.status(200).send("successful")
})




////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// یه روش دیگه وجود داره که با استفاده از اون میتونیم برای بعضی از روت ها اعمالش کنیم
// برای اینکار یه فانکشن مینویسیم و به عنوان پارامتر به روت پاس میدیم

// http://localhost:3000/special_middleware?name=milad&pass=123
function checkUser(req, res, next) {
    const {name, pass} = req.query;
    if (name === "milad" && pass === "123") {
        next();
    } else {
        res.status(400).send({message: "name or pass is false"})
    }
}

app.get("/special_middleware", checkUser, (req, res) => {
    res.status(200).send({message: "welcome"})
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// سه تا پکیج خیلی جالب و کاربردی داریم که فعلا باهاشون کار نمیکنم . فقط یه تعریفی ازشون مینویسم

// morgan => برای گرفتن لاگ ریکوئست ها با جزئیات کامل
// camelCase => همونطوری که از اسمش پیداشت برای تغییر تاختار متن ها استفاده میشه
// omitEmpty => برای جذف کردن کلید های خالی از رکوئست ها استفاده میشه و کلی آپشن داره و حتی میشه صفر هم باهاش پاک کرد 







app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})
