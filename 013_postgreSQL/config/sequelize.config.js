const Sequelize = require("sequelize")


// const sequelize = new Sequelize("postgres://postgres:5913@localhost:5432/learn")
// const sequelize = new Sequelize("learn", "postgres", "5913", {
//     host: "localhost",
//     port: 5432,
//     dialect: "postgres",
// })




// const sequelize = new Sequelize("postgres://root:FVaQnapmSl5YKsUEaOmTfD9p@nanaga-parbat.liara.cloud:33747/postgres")
const sequelize = new Sequelize("postgres", "root", "FVaQnapmSl5YKsUEaOmTfD9p", {
    host: "nanaga-parbat.liara.cloud",
    port: 33747,
    dialect: "postgres",
})


async function connectDB() {

    // if (Object.keys(sequelize.connectionManager.connections).length) {
    //     console.log("already connected")
    //   next()
    // } else {
      await sequelize.authenticate();
      console.log("connected")
    //   next()
    // }
    
}

module.exports = {
  connectDB,
  sequelize
};