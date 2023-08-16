const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show',
    required: false
  }
});

module.exports = mongoose.model('Season', seasonSchema);