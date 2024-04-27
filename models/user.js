const Sequelize = require('sequelize')
const sequelize = require("../util/database");
const { DataTypes } = require("sequelize");

const Post = sequelize.define('post' , {
    imageLink: {
        type:DataTypes.STRING,
        allowNull:false
    },
    desciption: {
        type:DataTypes.TEXT,
        allowNull:false
    }
});
module.exports=Post;