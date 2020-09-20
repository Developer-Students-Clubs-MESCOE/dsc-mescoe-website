const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const Event = require('./models/Event');
const Project = require('./models/Project');
const Video = require('./models/Video');

class connectDB {
    constructor(){
        this.connect();
    }

    async connect(){
        try {
            await mongoose.connect(db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            });
    
            console.log('MongoDB Connected ..');
        } catch (err) {
            console.log(err.message);
            process.exit(1);
        }
    }

    async create(collection, data){
        switch(collection){
            case 'events':
                try{
                    let event = new Event(data);
                    await event.save();
                    console.log('Event created!');
                } catch(err){
                    console.error(err.message);
                }
                break;

            case 'projects':
                try{
                    let project = new Project(data);
                    await project.save();
                    console.log('Project created!');
                } catch(err){
                    console.error(err.message);
                }
                break;
            
            case 'videos':
                try{
                    let video = new Video(data);
                    await video.save();
                    console.log('Video created!');
                }catch(err){
                    console.error(err.message);
                }
                break;
            
            default:
                console.log('Collection not found!');
                break;

        }            
    }

    async read(collection, data){
        switch(collection){
            case 'events':
                try{
                    const event = await Event.findById(data.id);
                    if (!event){
                        console.log('Event not found!');
                    }
                    console.log(event.name);
                    return event;
                } catch(err){
                    console.error(err.message);
                    if (err.kind == 'ObjectId') {
                        console.log('Event not found!');
                    }
                }
                break;

            case 'projects':
                try{
                    const project = await Project.findById(data.id);
                    if (!project){
                        console.log('Project not found!');
                    }
                    console.log(project.name);
                    return project;
                } catch(err){
                    console.error(err.message);
                    if (err.kind == 'ObjectId') {
                        console.log('Project not found!');
                    }
                }
                break;

            case 'videos':
                try{
                    const video = await Video.findById(data.id);
                    if (!video){
                        console.log('Video not found!');
                    }
                    console.log(video.name);
                    return video;
                } catch(err){
                    console.error(err.message);
                    if (err.kind == 'ObjectId') {
                        console.log('Video not found!');
                    }
                }
                break;

            default:
                console.log('Collection not found!');
                break;
        }
    }

    async update(collection, data){
        switch(collection){
            case 'events':
                try{
                    let event = await Event.findOne(data);
                    if(!event){
                        console.log('Event does not exist!');
                        return;
                    }
                    event = {
                        name: 'updated'
                    }
                    await event.save();
                    console.log(event);
                    return event;
                } catch(err){
                    console.error(err.message);
                }
                break;

            case 'projects':
                try{
                    let project = await Project.findOne(data);
                    if(!project){
                        console.log('Project does not exist!');
                        return;
                    }
                    project = {
                        name: 'updated'
                    }
                    await project.save();
                    console.log(project);
                    return project;
                } catch(err){
                    console.error(err.message);
                }
                break;

            case 'videos':
                try{
                    let video = await Video.findOne(data);
                    if(!video){
                        console.log('Video does not exist!');
                        return;
                    }
                    video = {
                        name: 'updated'
                    }
                    await video.save();
                    console.log(video);
                    return video;
                } catch(err){
                    console.error(err.message);
                }
                break;

            default:
                console.log('Collection not found!');
                break;
        }
    }

    async delete(collection, data){
        switch(collection){
            case 'events':
                try{
                    const event = await Event.findById(data.id);
                    await event.remove();
                    console.log('Event removed!');
                } catch(err){
                    console.error(err.message);
                }
                break;

            case 'projects':
                try{
                    const project = await Project.findById(data.id);
                    await project.remove();
                    console.log('Project removed!');
                } catch(err){
                    console.error(err.message);
                }
                break;

            case 'videos':
                try{
                    const video = await Video.findById(data.id);
                    await video.remove();
                    console.log('Video removed!');
                } catch(err){
                    console.error(err.message);
                }
                break;

            default:
                console.log('Collection not found!');
                break;
        }
    }
}

const connectdb = new connectDB();
    
module.exports = connectdb;