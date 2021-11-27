const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gamerapi');
mongoose.Promise = global.Promise

module.exports = mongoose
