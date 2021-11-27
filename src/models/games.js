const mongoose = require('../database')

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    platform:{
        type: String,
        required: true
    }
})

const Game = mongoose.model('Game', GameSchema)
module.exports = Game