
const express = require("express");
const { ErrorHandler } = require("../../Utils/ErrorHandler");
const { NotFoundHandler } = require("../../Utils/NotFoundHandler");
const { testExpressValidator, registerValidator } = require("./auth.validator");
const { validationResult } = require("express-validator");
const { paramsValidator } = require("./params.validator");
const { queryStringValidator } = require("./query.validator");
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 3000;




app.post("/testValidator", testExpressValidator(), (req, res, next) => {
    try {
        const data = req.body
        const error = validationResult(req)
        res.send({
            statusCode: res.statusCode,
            data: data,
            error
        })
    } catch(err) {
        next(err)
    }
})


app.post("/register", registerValidator(), (req, res) => {
    const data = req.body;
    const error = validationResult(req);

    res.send({
        statusCode: res.statusCode,
        data: error,
    })
})


app.get("/params_validation/:userId", paramsValidator, (req, res) => {
    const { userId } = req.params;
    const error = validationResult(req);
    res.send(error)
})



app.get("/query_validation", queryStringValidator(), (req, res) => {
    const query= req.query;
    console.log(query)
    const error = validationResult(req);
    res.send(error)
})








app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})