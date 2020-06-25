const { Schema, model } = require('mongoose');

const schema = new Schema({
    text: String,
    link: String
});

module.exports = model('RightEn', schema);