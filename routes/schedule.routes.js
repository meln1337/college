const { Router } = require('express');
const Schedule = require('../models/schedule.model');

const router = Router();

router.post('/schedules', async (req, res) => {
    const { date, text, day, course, group } = req.body;
    const schedule = new Schedule({ date, text, day, course, group });
    schedule.save();
    res.status(201).json(schedule);
});

router.get('/schedules', async (req, res) => {
    const { course, group } = req.query;
    const schedules = await Schedule.find({ course, group });
    res.json({ schedules, course, group });
});

router.put('/schedules', async (req, res) => {
    const { id, date, day, text } = req.body;
    const schedule = await Schedule.updateOne({ _id: id }, { $set: { date, day, text } });
    res.json({ schedule });
});

module.exports = router;