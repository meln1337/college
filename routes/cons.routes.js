const { Router } = require('express');
const Cons = require('../models/cons.model');

const router = Router();

router.post('/consultation', async (req, res) => {
    const { date, text, day, group } = req.body;
    const cons = new Cons({ date, text, day, group });
    await cons.save();
    res.status(201).json(cons);
});

router.get('/consultation/:group', async (req, res) => {
    const { group } = req.params;
    const cons = await Cons.find({ group });
    res.json({ cons, group });
});

router.put('/consultation', async (req, res) => {
    const { id, date, day, text } = req.body;
    const cons = await Cons.updateOne({ _id: id }, { $set: { date, day, text } });
    res.json({ cons });
});

module.exports = router;