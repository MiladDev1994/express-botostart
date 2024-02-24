const express = require("express")
const app = express()
const port = 3000;

// برای دریافت اطلاعات از طریق body و post & put & patch باید مقادیر زیر رو اضافه کنیم
app.use(express.json()) // برای دریافت json
app.use(express.urlencoded({extended: true})) // برای دریافت urlencoded

app.post("/body", (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})



app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})
