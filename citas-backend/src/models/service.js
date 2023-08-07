const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Service',serviceSchema);