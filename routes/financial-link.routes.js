const { Router } = require('express');
const FinancialLink = require('../models/link.model');

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

module.exports = router;