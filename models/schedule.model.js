const {
    Schema,
    model
} = require('mongoose');

const schema = new Schema({
    date: String,
    text: Array,
    day: String,
    course: Number,
    group: Number
}, {
    timestamps: true
});

module.exports = model('Schedule', schema);