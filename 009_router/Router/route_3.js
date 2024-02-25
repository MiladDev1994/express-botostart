const express = require("express");
const router = express.Router();


router.get("/blogs", (req, res) => {
    res.send(req.url)
})

module.exports = router