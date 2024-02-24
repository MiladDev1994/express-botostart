const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/learning";
async function connectDB() {
    try {
        // console.log(mongoose.connections[0].readyState)
        mongoose.set('strictQuery', false)
        await mongoose.connect(DB_URL)
        console.log("connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = {connectDB}
