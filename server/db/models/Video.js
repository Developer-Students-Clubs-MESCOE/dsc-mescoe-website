const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    
});

const Video = mongoose.model('video', VideoSchema);
module.exports = Video;