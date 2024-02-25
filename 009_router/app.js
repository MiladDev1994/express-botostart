const port = 3000;
const express = require("express");
const { NotFoundHandler } = require("../Utils/NotFoundHandler");
const { ErrorHandler } = require("../Utils/ErrorHandler");
const app = express();

const allRouters = require("./Router/index")

app.use("/nested", allRouters)







app.use(NotFoundHandler)
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`app started on port ${port} \n http://localhost:${port}`)
})