const { Router } = require('express');
const multer = require('multer');
const moment = require('moment');
const path = require('path');
const Link = require('../models/link.model');

const router = Router();

let date;
let nameOfPdf;

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        date = moment().format('DDMMYYYY-HHmmss SSS')
        nameOfPdf = `${date}-${file.originalname}`
        cb(null, nameOfPdf)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'application/pdf') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const limits = {
    fileSize: 1024 * 1024 * 5
}

const upload = multer({
    storage,
    limits,
    fileFilter
});

router.post('/upload', upload.single('image'), async (req, res) => {
    console.log(req)
    const right = new Link({ link: nameOfPdf, text: req.body.text })
    await right.save()
    res.json(right)
})

router.get('/uploads/:name', (req, res) => {
    
    res.sendFile(path.join(__dirname, '../', `/uploads/${req.params.name}`));
})

module.exports = router;