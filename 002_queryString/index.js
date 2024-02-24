const express = require("express")
const app = express()
const port = 3000;
const queryString = require("querystring")

// http://localhost:3000/query_string?name=milad&family=goli
app.get("/query_string", (req, res) => {

    console.log(queryString.parse("name=milad&family=goli")) // برای تبدیل استرینگ به آبجکت
    console.log(queryString.stringify({
        name: "milad",
        family: "goli"
    })) //برای تبدیل آبجکت به استرینگ

    res.status(200).send(req.query)
})

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})
