const Sequelize = require('sequelize');

const sequelize = new Sequelize('newTable' , 'root' , 'najiyavt@2001', {
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;