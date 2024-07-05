const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Url = sequelize.define('Url', {
    originalUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensure shortUrl is unique
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false // Disable timestamps (createdAt and updatedAt)
});

module.exports = Url;
