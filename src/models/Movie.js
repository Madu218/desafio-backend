const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Movie', movieSchema);