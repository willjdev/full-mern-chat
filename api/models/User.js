const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username: {
        type: String,
        unique: true, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = model( 'User', userSchema );