const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  ismorning: {
    type: Boolean,
    required: true,
  },
  isevening: {
    type: Boolean,
    required: true,
  },

});

module.exports = mongoose.model('Calendar',calendarSchema);