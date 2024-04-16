const { Model, DataTypes } = require("sequelize");
const {sequelize} = require("../config/sequelize.config")


// class User extends Model {}

// User.init({
//     id: { type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     first_name: { type: DataTypes.STRING, },
//     last_name: { type: DataTypes.STRING, },
//     user_name: { type: DataTypes.STRING, unique: true, allowNull: false},
//     password: { type: DataTypes.STRING, allowNull: false},
//     active: { type: DataTypes.BOOLEAN, defaultValue: false},
//     birthDay: { type: DataTypes.DATE, },
// }, {
//     sequelize,
//     name: "users",
// })

const User = sequelize.define("users", {
    id: { type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, },
    last_name: { type: DataTypes.STRING, },
    user_name: { type: DataTypes.STRING, unique: true, allowNull: false},
    password: { type: DataTypes.STRING, allowNull: false},
    active: { type: DataTypes.BOOLEAN, defaultValue: false},
    birthDay: { type: DataTypes.DATE, },
})

sequelize.sync();

module.exports = {User}