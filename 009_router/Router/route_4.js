const express = require("express");
const router = express.Router();


router.get("/brands", (req, res) => {
    res.send(req.url)
})

module.exports = router