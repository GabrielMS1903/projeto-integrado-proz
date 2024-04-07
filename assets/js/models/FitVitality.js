const DataTypes = require("sequelize");

const db = require("../db/conn")
const User = require("../models/User")

const FitVitality = db.define("FitVitality", {
    title: {
        type: DataTypes.STRING, 
        allowNull:false, 
       
    },
})

FitVitality.belongsTo(User)
User.hasMany(FitVitality)