const { Schema, model } = require('mongoose');

const schema = new Schema({
    head: String,
    text: String,
    img: String
}, {
    timestamps: true
});

module.exports = model('PostEn', schema);