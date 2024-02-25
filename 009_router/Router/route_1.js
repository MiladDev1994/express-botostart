const express = require("express");
const router = express.Router();


router.get("/users", (req, res) => {
    res.send(req.url)
})

module.exports = router