const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
})

Address.belongsTo(User)
//ou
// Address.belongsTo(User, { foreignKey: 'user_id', as: 'Users' } )

module.exports = Address