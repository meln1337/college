const {
    Schema,
    model
} = require('mongoose');

const schema = new Schema({
    date: String,
    text: Array,
    day: String,
    group: Number
}, {
    timestamps: true
});

module.exports = model('Consultation', schema);