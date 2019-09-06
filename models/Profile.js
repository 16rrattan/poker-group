const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    name: { type: String, required: false },
    password: { type: Number, required: false },
    rank: { type: Number, required: false }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);