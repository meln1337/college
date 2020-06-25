const { Router } = require('express');
const Schedule = require('../models/scheduleEn.model');

const router = Router();

router.post('/schedulesEn', async (req, res) => {
    const { date, text, day, course, group } = req.body;
    const schedule = new Schedule({ date, text, day, course, group });
    await schedule.save();
    res.status(201).json(schedule);
});

router.get('/schedulesEn', async (req, res) => {
    const { course, group } = req.query;
    const schedules = await Schedule.find({ course, group });
    res.json({ schedules, course, group });
});

router.put('/schedulesEn', async (req, res) => {
    const { id, date, day, text } = req.body;
    const schedule = await Schedule.updateOne({ _id: id }, { $set: { date, day, text } });
    res.json({ schedule });
});

module.exports = router;