const {Schema, model, models} = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, // برای جلوگیری از ارسال اطلاعات خالی
        minLength: 5
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 20,
    }
}, {
    timestamps: true
})

const UserModel = models.users || model("user", userSchema)

module.exports = {UserModel}


// یه نکته خیلی جالب . ما میتونیم اسکیما ها رو داخا همدیگه استفاده کنیم و این عالیه