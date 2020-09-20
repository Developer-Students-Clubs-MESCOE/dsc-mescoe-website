const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    
});

const Event = mongoose.model('event', EventSchema);
module.exports = Event;