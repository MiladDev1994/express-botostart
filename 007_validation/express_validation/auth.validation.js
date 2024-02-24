const { Joi } = require("express-validation");


const bodyValidation = {
    body: Joi.object({
        email: Joi.string().email().message("email invalid").required(),
        password: Joi.string().min(5).max(20).required() //.regex() || pattern() => برای وارد کردن رجکس
    })
}

const registerValidation = {
    body: Joi.object({
        fullName: Joi.string().min(5).max(35).message("fullName invalid").required(),
        age: Joi.number().integer().min(12).max(90).required(),
        mobile: Joi.string().length(11).required(),
        email: Joi.string().email().message("email invalid").required(),
        password: Joi.string().min(5).max(20).required(),
        confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
    })
}

module.exports = {
    bodyValidation,
    registerValidation
}