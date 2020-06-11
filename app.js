const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api', require('./routes/financial-link.routes'));
app.use('/api', require('./routes/post.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    })
}

async function start() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    app.listen(PORT, () => {
        console.log(`The server has been started on port ${PORT}`);
    });
};

start();