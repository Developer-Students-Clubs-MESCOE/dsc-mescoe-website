const mongoose = require('mongoose');

const RankSchema = new mongoose.Schema({
    0: {
        type: String,
        required: true
    },
    1: {
        type: Number,
        required: true
    },
    2: {
        type: Number,
        required: true
    },
});

const Rank = mongoose.model('rank', RankSchema);
module.exports = Rank;
