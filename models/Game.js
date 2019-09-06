const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const GameSchema = new Schema({
    name: { type: String, required: true },
    gametype: { type: String, required: false },
    buyin: { type: Number, required: false },
    cashout: { type: Number, required: false },
    placeleft: { type: Number, required: false },
    date: { type: Date, default: Date.now }
});

module.exports = Game = mongoose.model('game', GameSchema);