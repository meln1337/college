const { Router } = require('express');
const FinancialLink = require('../models/link.model');
const path = require('path');
const fs = require('fs');
const Link = require('../models/link.model');

const router = Router();

router.get('/financial-links', async (req, res) => {
    const links = await FinancialLink.find();
    res.json(links)
});

router.post('/financial-links', async (req, res) => {
    const { text, link: linkModel } = req.body;
    const link = new FinancialLink({ text, link: linkModel });
    await link.save();
    res.json(link);
});

router.delete('/financial-links/:id', async (req, res) => {
    try {
        const link = await Link.findOne({ _id: req.params.id });
        await Link.deleteOne({ _id: req.params.id })
        fs.unlink(path.join(__dirname, '../', 'uploads', link.link), (err) => {
            console.log(err)
        })
        res.json('success')
    } catch (e) {
        res.json({ message: e })
    }
})

module.exports = router;