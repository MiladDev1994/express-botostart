const { body } = require("express-validator");

const testExpressValidator = () => [
    body("email").isEmail().withMessage("email invalid"),
    body("password").isLength({min: 5, max: 10}).withMessage("password invalid")
]


const registerValidator = () => [
    body("fullName").isLength({min: 5, max: 35}).withMessage("fullName invalid"),
    // body("age").isNumeric().withMessage("age invalid"),
    body("age").custom(value => {
        if (+value < 12 || +value > 90) {
            throw new Error("age invalid")
        }
        return true
    }),
    body("mobile").isMobilePhone("fa-IR").withMessage("phone invalid"),
    body("email").isEmail().withMessage("email invalid"),
    body("password").isLength({min: 5, max: 10}).withMessage("password invalid"),
    body("confirmPassword").custom((value, {req}) => {
        if (value !== req.body.password) throw new Error("confirmPassword invalid")
        return true
    })
]

module.exports = {
    testExpressValidator,
    registerValidator
}