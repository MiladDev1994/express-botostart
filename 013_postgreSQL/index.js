const port = 3000;
const express = require("express");
const { connectDB } = require("./config/sequelize.config");
const {User} = require("./models/user.model");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./config/sequelize.config")
connectDB()


app.get("/addUser", async (req, res, next) => {
    const id = 6;
    const first_name = "milad2";
    const last_name = "goli2";
    const user_name = "mili6";
    const password = "123456";
    const active = true;
    const birthDay = "1373-02-18";


    const newUser = await User.create({
        id,
        first_name,
        last_name,
        user_name,
        password,
        active,
        birthDay,
    });
    
    // await newUser.save();

    res.status(200).json(newUser)
})


app.get("/getUser", async (req, res, next) => {


    const users = await User.findAll();
    
    // await newUser.save();

    res.status(200).json(users)
})


app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})