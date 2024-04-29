const Sequelize = require('sequelize')
const sequelize = require("../util/database");

const Post = sequelize.define('post' , {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    imageUrl: {
        type:Sequelize.STRING,
        allowNull:false
    },
    description: {
        type:Sequelize.TEXT,
        allowNull:false
    }
});
module.exports=Post;