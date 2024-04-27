const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routers = require('./routes/post');
const sequelize=require('./util/database')

const app=express()
app.use(cors());
app.use(bodyParser.json());

sequelize
.sync()
.then(result => {
    app.listen(2000,() => console.log(" server 2000 is started working"))
})
.catch(err => console.log(err))

