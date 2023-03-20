const { DataTypes } = require('sequelize');
const database = require('../utils/database');

const Conversations = database.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

module.exports = Conversations;