const { param } = require("express-validator");


const paramsValidator = param("userId").isMongoId().withMessage("id not objectId")

module.exports = {paramsValidator}