const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const router = Router();

router.post('/register', [
    check('name', 'Name length must be greather than 1').isLength({ min: 2, max: 100 }),
    check('surname', 'Surname length must be greather than 1').isLength({ min: 2, max: 100 }),
    check('email', 'Email is incorrect or already exists').isLength({ min: 2, max: 100 }).isEmail(),
    check('password', 'Password length must be greather than 7').isLength({ min: 8, max: 100 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    const emailExits = await User.findOne({ email: req.body.email })
    if (emailExits) {
        return res.status(400).send('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        surname: req.body.surname,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    try {
        await user.save();
        res.status(201).json({ message: 'User has been created' });
    } catch (e) {
        res.status(400).json(e);
    }
})

router.post('/login', async (req, res) => {
    console.log(req.session)

    const { email, password } = req.body

    console.log(req.body)

    const user = await User.findOne({ email })
    console.log(user)
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(403).json('Incorrect data')
    }

    if (req.session) {
        req.session.user = {
            email: user.email,
            name: user.name,
            id: user._id
        }

        req.session.save(() => {
            console.log('g')
        })
    }

    res.cookie('sessionID', req.sessionID, { maxAge: 1000 * 60 * 60 * 24 * 31, httpOnly: true })
    res.json({ token })
})

router.post('/me', (req, res) => {
    if (req.session) {
        if (req.sessionID === req.cookies.sessionID) {
            res.json({ user: req.session.user })
        } else {
            res.status(403).json('You are not authorized')
        }
    }
})

module.exports = router;