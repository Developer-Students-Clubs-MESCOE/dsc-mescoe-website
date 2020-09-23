const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Video = mongoose.model("video", VideoSchema);
module.exports = Video;
