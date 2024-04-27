const Post = require('../models/user');
const Comment = require('../models/comment')

exports.getAddPost = (req,res,next) => {
    Post.findAll({ include: Comment })
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log("ERROR:(",err);
        res.status(500).json({ error: ' Failed' })
    })
}

exports.postAddPost = (req,res,next) => {
    const {imageUrl,desc} = req.body;
    Post.create({
        imageUrl,desc
    })
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        console.log("ERROR:(",err);
        res.status(500).json({ error: ' Failed' })
    })
}

// exports.getAddComment = (req,res,next) => {
    
// }

exports.postAddComment = (req,res,next) => {
    const {id,text} = req.body
    Post.create({id:id,text})
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        console.log("ERROR:(",err);
        res.status(500).json({ error: ' Failed' })
    })
}