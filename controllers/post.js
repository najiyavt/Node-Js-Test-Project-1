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
    const {imageUrl,description} = req.body;
    Post.create({
        imageUrl,
        description
    })
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        console.log("ERROR:(",err);
        res.status(500).json({ error: ' Failed' })
    })
}

exports.postAddComment = (req,res,next) => {
    const {postId,text} = req.body
    Comment.create({ postId, text })
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        console.log("ERROR:(",err);
        res.status(500).json({ error: ' Failed' })
    })
}