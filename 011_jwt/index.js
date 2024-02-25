const port = 3000;
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const secret = "c4d9a5cb4e169174f7b8ac0a7b699d5a"

app.get("/jwt", (req, res) => {
    const data = {
        name: "milad",
        email: "milad@gmail.com"
    }
    const token  = jwt.sign(
        data, //اطلاعاتی که میخوایم تو توکن باشه (payload)
        secret, // سکرت آیدی
        {expiresIn: "1w", algorithm: "HS512"} // آپشن ها
    )

    res.send(token)
})



app.get("/jwt-verify", (req, res) => {
    const {authorization} = req.headers;
    const token = authorization.split(" ").pop()
    try {
        const verify = jwt.verify(token, secret)
        res.send(verify)
    } catch (error) {
        res.send({message: error})
    }

})


app.get("/jwt-decode", (req, res) => {
    const {authorization} = req.headers;
    const token = authorization.split(" ").pop()
    try {
        const decode = jwt.decode(token, secret)
        res.send(decode)
    } catch (error) {
        res.send({message: error})
    }

})





app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})