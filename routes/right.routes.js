const { Router } = require('express');
const Right = require('../models/right.model');

const router = Router();

router.get('/rights', async (req, res) => {
    const rights = await Right.find();
    res.json(rights);
})

router.post('/rights', async (req, res) => {
    const { text, link } = req.body;
    console.log(req.body)
    const right = new Right({ text, link });
    await right.save();
    res.json(right);
});

module.exports = router;