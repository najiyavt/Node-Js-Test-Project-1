const sequelize = require("../util/database");
const  DataTypes  = require("sequelize");

const Comment = sequelize.define('comment',{
    text:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});
module.exports=Comment;