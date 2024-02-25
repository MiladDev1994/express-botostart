const port = 3000;
const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
app.use(express.json());
app.use(express.urlencoded({extended: true}));


let passwordHashed = ""

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    passwordHashed = hash
    return hash
}

function verifyPassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)
}


app.post("/password", (req, res) => {
    const {password} = req.body;
    const hashPass = hashPassword(password)
    res.send(hashPass)
})


app.post("/verify-password", (req, res) => {
    const {password} = req.body;
    const verifyPass = verifyPassword(password, passwordHashed)
    res.send(verifyPass)
})



// app.use(NotFoundHandler)
// app.use(ErrorHandler)


app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})