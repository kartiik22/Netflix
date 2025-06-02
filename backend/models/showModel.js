const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
