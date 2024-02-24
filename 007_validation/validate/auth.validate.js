const Schema = require("validate")

const registerSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        length: {min: 5, max: 35},
        message: {                      // برای تک تک کلید ها میتونیم پیام داشته باشیم
            type: "type",
            required: "required",
            length: "length",
        },
    },
    age: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        length: 11
    },
    email: {
        type: String,
        required: true,
        length: {min: 5, max: 35},
    },
    password: {
        type: String,
        required: true,
        length: {min: 5, max: 20},
    },
    confirmPassword: {
        type: String,
        required: true,
        // ref: "password"
    },
    rol: {
        type: String,
        required: true,
        enum: ["superAdmin", "admin", "user"]
    }
})

module.exports = {
    registerSchema,
}