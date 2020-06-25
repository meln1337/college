const { Router } = require('express');
const Zaminy = require('../models/zaminyEn.model');

const router = Router();

router.post('/zaminyEn', async (req, res) => {
    const { date, text, day, course, group } = req.body;
    const zamina = new Zaminy({ date, text, day, course, group });
    await zamina.save();
    res.status(201).json(zamina);
});

router.get('/zaminyEn', async (req, res) => {
    const { course, group } = req.query;
    const zaminy = await Zaminy.find({ course, group });
    res.json({ zaminy, course, group });
});

router.put('/zaminyEn', async (req, res) => {
    const { id, date, day, text } = req.body;
    const zamina = await Zaminy.updateOne({ _id: id }, { $set: { date, day, text } });
    res.json({ zamina });
});

module.exports = router;