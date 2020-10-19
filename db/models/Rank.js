const mongoose = require('mongoose');

const RankSchema = new mongoose.Schema({
    0: {
        type: String,
        required: true
    },
    1: {
        type: String,
        required: true
    },
    2: {
        type: String,
        required: true
    },
    3: {
        type: String,
        required: true,
    },
    4: {
        type: Number,
        required: true
    },
    5: {
        type: String,
        required: true
    },
    6: {
        type: Number,
        required: true
    },
    7: {
        type: String,
        required: false
    },
    8: {
        type: String,
        required: true
    }
});

const Rank = mongoose.model('rank', RankSchema);
module.exports = Rank;
