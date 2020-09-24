const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtube: {
        type: String
    },
    github: {
        type: String
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/800x800?text=DSC+MESCOE'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('project', ProjectSchema);
module.exports = Project;