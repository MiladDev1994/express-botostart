
const express = require("express");
const { ErrorHandler } = require("../../Utils/ErrorHandler");
const { NotFoundHandler } = require("../../Utils/NotFoundHandler");
const { validate } = require("express-validation");
const { bodyValidation, registerValidation } = require("./auth.validation");
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 3000;






app.post("/testValidation", validate(bodyValidation), (req, res) => {
    const data = req.body;

    res.send(data)
})



app.post("/register", validate(registerValidation), (req, res) => {
    const data = req.body;

    res.send(data)
})



app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})