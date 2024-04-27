const {DataTypes} = require("sequelize");

const db = require("../db/conn")
const User = require("../models/User")


const FitVitality = db.define("FitVitality", {
    title: {
        type: DataTypes.STRING, 
        allowNull:false, 
       
    },
    aboutThey: {
        type: DataTypes.STRING, 
        allowNull:false, 
       
    },

    email: {
        type: DataTypes.STRING, 
        allowNull:false, 
       
    },
})

module.exports = FitVitality

FitVitality.belongsTo(User)
User.hasMany(FitVitality)