const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show',
    required: false
  },
  season: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Season',
    required: false
  }
});

module.exports = mongoose.model('Episode', episodeSchema);