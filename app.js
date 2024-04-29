const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routers = require('./routes/post');
const sequelize=require('./util/database');
const Comment = require('./models/comment')
const Post = require('./models/user');

const app=express()
app.use(cors());
app.use(bodyParser.json());
app.use('/',routers)

Post.hasMany(Comment)
Comment.belongsTo(Post);


sequelize
//.sync()
.sync({force:true})
.then(result => {
    app.listen(3000,() => console.log(" server 2000 is started working"))
})
.catch(err => console.log(err))

