const port = 3000;
const express = require("express");
const app = express();
const crypto = require("crypto")
app.use(express.json());
app.use(express.urlencoded({extended: true}));


let passwordHashed = ""

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex")
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    const newHash = `$2s.${salt}.${hash}`;
    // console.log(newHash)
    passwordHashed = newHash;
    return newHash
}

function verifyPassword(password, hashPassword) {
    const salt = hashPassword.split(".")?.[1];
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    const newHash = `$2s.${salt}.${hash}`;
    // console.log(salt);
    return newHash === hashPassword;
}


app.post("/password", (req, res) => {
    const {password} = req.body;
    const hashPass = hashPassword(password)
    res.send(hashPass)
})


app.post("/verify-password", (req, res) => {
    const {password} = req.body;
    // const hashPass = hashPassword(password)
    const verifyPass = verifyPassword(password, passwordHashed)
    res.send(verifyPass)
})




// یه روش دیگه برای هش کردن وجود داره که با فانکشن createHAsh انجام میشه
app.post("/hash-by-createHash", (req, res) => {
    const {password} = req.body;
    const hash = crypto.createHash("sha512", {encoding: "hex"})
    .update(password)
    .digest("base64")

    res.send(hash)
})



// یه روش دیگه هم داریم که مثل cteateHash هستش با این تفاوت که میتونیم بهش salt هم بدیم
app.post("/hash-by-createHmac", (req, res) => {
    const {password} = req.body;
    const salt = crypto.randomBytes(16).toString("hex")
    const hash = crypto.createHmac("sha512", salt)
    .update(password)
    .digest("hex")

    res.send(hash)
})

// app.use(NotFoundHandler)
// app.use(ErrorHandler)


app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})