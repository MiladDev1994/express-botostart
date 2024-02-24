const { query } = require("express-validator");


const queryStringValidator = () => [
    query("title").isString().withMessage("title query invalid"),
    query("sort").isString().withMessage("sort query invalid"),
]

module.exports = { queryStringValidator }