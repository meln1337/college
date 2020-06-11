const { Router } = require('express');
const Post = require('../models/post.model');

const router = Router();

router.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

router.post('/posts', async (req, res) => {
    const { head, text, img } = req.body;
    const post = new Post({ head, text, img });
    await post.save();
    res.json(post);
});

router.get('/posts', async (req, res) => {
    const page = parseInt(req.query.page);
    const skip = (page - 1) * 4;
    const posts = await Post.find()
                            .sort({createdAt: -1})
                            .skip(skip)
                            .limit(4);
    res.json(posts);
});

module.exports = router;