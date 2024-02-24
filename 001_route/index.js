const express = require("express")
const app = express()
const port = 3000

const users = [
    {id: 1, name: "user_1"},
    {id: 2, name: "user_2"},
    {id: 3, name: "user_3"},
    {id: 4, name: "user_4"}
] 

const products = [
    {id: 1, name: "product_1"},
    {id: 2, name: "product_2"},
    {id: 3, name: "product_3"},
    {id: 4, name: "product_4"}
] 

// ساخت مسیر ابتدایی
// app.get("/", (req, res) => {
//     // res.status(200).send("Milad Goli")
//     // res.status(300).send({name: "milad"})
//     res.status(400).send("<h1>Milad</h1>")
// })

// ساخت مسیر های مختلف
// app.get("/users", (req, res) => {
//     res.status(300).send(users)
// })


// ساخت داینامیک روت
// app.get("/users/:id", (req, res) => {
    
//     const data = users.find(user => user.id === +req.params.id)
//     if (data) {
//         res.status(200).json({
//             statusCode: res.statusCode,
//             data,
//             message: "success"
//         })
//     } else {
//         res.status(404).send({message: "user not found"})
//     }
// })

// با گذاشتن ؟ در انتهای مسیر مشخص میکنیم که داینامیک روت یمتونه باشه و میتونه نباشه
// app.get("/product/:id?", (req, res) => {
//     const { id } = req.params
//     if (id) {
//         const data = products.find(user => user.id === +req.params.id)
//         if (data) {
//             res.status(200).json({
//                 statusCode: res.statusCode,
//                 data,
//                 message: "success"
//             })
//         } else {
//             res.status(404).send({message: "user not found"})
//         }
//     } else {
//         res.status(300).send(products)
//     }
// })


// پارامس ها میتونن چنتا هم باشن
// app.get("/nested/:params_1?/:params_2?/:params_3?", (req, res) => {
//     const paramss = req.params
//     res.status(300).send(paramss)
// })


// امکان خوندن فایل هم داریم
// app.get("/file.txt", (req, res) => {
//     res.status(200).send({massage: "فعلا به بخش خوندن فایل نرسیدیم :)"})
// })


// در روت زیر مقدار b میتونه آپشنال باشه
// app.get("/ab?cd", (req, res) => {
//     res.status(200).send({message: "مقدار b میتونه آپشنال باشه"})
// })


// در روت زید مقدار f میتونه به دفعات تکرار بشه
// app.get("/ef+gh", (req, res) => {
//     res.status(200).send({message: "مقدار f میتونه به دفعات تکرار بشه"})
// })


// بعد از b هر مقداری میتونه قرار بگیره
// app.get("/ab*cd", (req, res) => {
//     res.status(200).send({message: "بعد از b هر مقداری میتونه قرار بگیره"})
// })


// برای اینکه شرایط گفته شده رو روی چنتا حرف اعمال کنیم میتونیم مقداری که میخوایم رو داخل پرانتز بذاریم => (ab)?cd || (ab)+cd || (ab)*cd






app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})