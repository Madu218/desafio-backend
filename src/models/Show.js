const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
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

module.exports = mongoose.model('Show', showSchema);