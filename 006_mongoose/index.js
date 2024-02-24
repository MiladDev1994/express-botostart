
const express = require("express");
const { connectDB } = require("./mongo.config");
const { UserModel } = require("./model/users.model");
const { isValidObjectId } = require("mongoose");
const app = express()
app.use(express.json()) // برای دریافت json
app.use(express.urlencoded({extended: true})) // برای دریافت urlencoded
const port = 3000;
connectDB()


// ایجاد کردن داکیومنت با create
app.post("/create", async (req, res) => {
    const data = req.body;
    console.log(data)
    const user = await UserModel.create(data)
    res.status(200).send(user)
})


// ایجاد کردن داکیومنت با new
app.post("/new", async (req, res) => {
    const data = req.body;
    console.log(data)
    const user = new UserModel(data)
    await user.save()
    res.status(200).send(user)
})



app.post("/insertMany", async (req, res) => {
    const user = await UserModel.insertMany([
        {
            name: "insertMany_1",
            email: "insertMany_1@gmail.com",
            age: 1
        },
        {
            name: "insertMany_2",
            email: "insertMany_2@gmail.com",
            age: 2
        },
        {
            name: "insertMany_3",
            email: "insertMany_3@gmail.com",
            age: 3
        },
    ])
    res.status(200).send(user)
})



app.get("/find", async (req, res) => {
    const data = await UserModel.find()
    res.status(200).send({
        statusCode: res.statusCode,
        documentLength: data.length,
        data
    })
})



app.get("/findOne/:userId", async (req, res) => {
    try {
        const {userId} = req.params
        console.log(isValidObjectId(userId))
        const data = await UserModel.findOne({_id: userId})
        if (data) {
            res.status(200).send({
                statusCode: res.statusCode,
                documentLength: data.length,
                data
            })
        } else {
            res.status(200).send({
                statusCode: res.statusCode,
                message: "user not found"
            })

        }
    } catch (err) {
        console.log(err)
    }
})



app.delete("/deleteOne/:userId", async (req, res) => {
    try {
        const {userId} = req.params
        console.log(isValidObjectId(userId)) // برای چک کردن ساختار _id
        const find = await UserModel.findOne({_id: userId})
        const data = find && await UserModel.deleteOne({_id: userId})
        if (data) {
            res.status(200).send({
                statusCode: res.statusCode,
                documentLength: data.length,
                data
            })
        } else {
            res.status(200).send({
                statusCode: res.statusCode,
                message: "user not found"
            })

        }
    } catch (err) {
        console.log(err)
    }
})



// همه چی پاک میشه
app.delete("/deleteMany", async (req, res) => {
    try {
        const data = find && await UserModel.deleteMany()
        if (data) {
            res.status(200).send({
                statusCode: res.statusCode,
                data
            })
        } else {
            res.status(200).send({
                statusCode: res.statusCode,
                message: "user not found"
            })

        }
    } catch (err) {
        console.log(err)
    }
})



app.put("/update/:userId", async (req, res) => {
    try {
        const {userId} = req.params;
        console.log(isValidObjectId(userId))
        const newUser = req.body;
        const user = await UserModel.findOne({_id: userId})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        Object.assign(user, newUser)
        user.save();

        res.send({
            statusCode: res.statusCode,
            data: user
        })
    } catch(err) {
        console.log(err)
    }
})



app.post("/updateOne/:userId", async (req, res) => {
    const { userId } = req.params;
    const data = req.body;
    const user = await UserModel.updateOne({_id: userId}, {
        $set: data
    })

    res.send({
        statusCode: res.statusCode,
        data: user,
    })
})



app.put("/findOneAndUpdate/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const data = req.body;
        const user = await UserModel.findOneAndUpdate({_id: userId}, {
            $set: data,
        }) 
        res.send({
            statusCode: res.statusCode,
            data: user
        })
    } catch(err) {
        console.log(err)
    }
})



app.put("/updateMany", async (req, res) => {
    const user = await UserModel.updateMany({name: "insertMany_1"}, {$set: {name: "insertMany_4"}})
    res.send({
        statusCode: res.statusCode,
        data: user
    })

})




app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})
