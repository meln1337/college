const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    admin: Boolean,
},
{
    timestamps: true
}    
);

module.exports = model('User', schema);