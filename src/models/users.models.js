const {DataTypes} = require('sequelize');
const database = require('../utils/database');

const Users = database.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING(100),
    },
    lastname: {
        type: DataTypes.STRING(100),
    },
    imagae: {
        type: DataTypes.STRING
    }
});

module.exports = Users;
