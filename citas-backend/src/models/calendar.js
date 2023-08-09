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
  companyid: {
    type: String,
    required: true,
  },
  reservationby: {
    type: String,
    required: true,
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
    required: false,
  },
  isevening: {
    type: Boolean,
    required: false,
  }
});

module.exports = mongoose.model('Calendar',calendarSchema);