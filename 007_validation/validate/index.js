
const express = require("express");
const { ErrorHandler } = require("../../Utils/ErrorHandler");
const { NotFoundHandler } = require("../../Utils/NotFoundHandler");
const { registerSchema } = require("./auth.validate");
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 3000;



app.post("/register", (req, res) => {

    const validateError = registerSchema.validate(req.body)
    if (validateError.length) {
        throw new Error(validateError)
    } else {
        res.send({
            statusCode: res.statusCode,
            data: req.body
        })
    }
})









app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})