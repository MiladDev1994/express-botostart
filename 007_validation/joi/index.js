
const express = require("express");
const { ErrorHandler } = require("../../Utils/ErrorHandler");
const { NotFoundHandler } = require("../../Utils/NotFoundHandler");
const { bodyValidation, registerValidation } = require("./auth.joi");
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 3000;



app.post("/testJoi", async (req, res) => {

    try {
        await bodyValidation.validateAsync(req.body)
        res.send({
            statusCode: res.statusCode,
            data: req.body
        })
    } catch (err) {
        next(err)
    }
})



app.post("/register", async (req, res, next) => {

    try {
        await registerValidation.validateAsync(req.body)
        res.send({
            statusCode: res.statusCode,
            data: req.body
        })
    } catch (err) {
        next(err)
    }
})
 








app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})