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

router.delete('/rights/:id', async (req, res) => {
    try {
        const right = await Right.findOne({ _id: req.params.id });
        await Right.deleteOne({ _id: req.params.id })
        fs.unlink(path.join(__dirname, '../', 'uploads', right.link), (err) => {
            console.log(err)
        })
        res.json('success')
    } catch (e) {
        res.json({ message: e })
    }
})

module.exports = router;