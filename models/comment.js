const sequelize = require("../util/database");
const  Sequelize  = require("sequelize");

const Comment = sequelize.define('comment',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    text:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});
module.exports=Comment;