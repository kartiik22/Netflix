const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  streamingUrl: String,
  // You can add other URL related fields here
});

module.exports = mongoose.model('Url', urlSchema);
