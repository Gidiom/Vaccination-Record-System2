const mongoose = require("mongoose");


const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    fullname: String,

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phonenumber: Number
});

module.exports = mongoose.model('User', userSchema);
