const { Router } = require('express');
const Zaminy = require('../models/zaminy.model');

const router = Router();

router.post('/zaminy', async (req, res) => {
    const { date, text, day, course, group } = req.body;
    const zamina = new Zaminy({ date, text, day, course, group });
    await zamina.save();
    res.status(201).json(zamina);
});

router.get('/zaminy', async (req, res) => {
    const { course, group } = req.query;
    const zaminy = await Zaminy.find({ course, group });
    res.json({ zaminy, course, group });
});

router.put('/zaminy', async (req, res) => {
    const { id, date, day, text } = req.body;
    const zamina = await Zaminy.updateOne({ _id: id }, { $set: { date, day, text } });
    res.json({ zamina });
});

module.exports = router;