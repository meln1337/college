const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')

dotenv.config();

const PORT = process.env.PORT || 5000;

const MongoStore = connectMongo(session);

const app = express();

app.use(session({
    name: 'session-express',
    secret: 'asdfsdafsdafsadf',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 1000 * 60 * 60 * 24 * 31 }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 31
    }
}))

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', require('./routes/financial-link.routes'));
app.use('/api', require('./routes/post.routes'));
app.use('/auth', require('./routes/user.routes'));
app.use('/api', require('./routes/schedule.routes'));
app.use('/api', require('./routes/zaminy.routes'));
app.use('/api', require('./routes/cons.routes'));
app.use('/api', require('./routes/upload.routes'));
app.use('/api', require('./routes/right.routes'));
app.use('/api', require('./routes/postEn.routes'));
app.use('/api', require('./routes/consen.routes'));
app.use('/api', require('./routes/scheduleEn.routes'));
app.use('/api', require('./routes/zaminyEn.routes'));
app.use('/api', require('./routes/linkEn.routes'));
app.use('/api', require('./routes/rightEn.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('frontend/build'))

    app.get('*', (req, res) => {
        console.log('here')
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