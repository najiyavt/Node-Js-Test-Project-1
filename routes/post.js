const express = require('express')
const router = express.Router();
const controller = require('../controllers/post')

router.get('/post',controller.getAddPost)
router.post('/post',controller.postAddPost)
router.post('/comments',controller.postAddComment)

module.exports=router;