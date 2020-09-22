const mongoose = require('mongoose');
const mongoURI = require('./default').mongoURI;
const Event = require('./models/Event');
const Project = require('./models/Project');
const Video = require('./models/Video');

class Database {
  constructor() {
    this.connect().then(() => console.info("MongoDB Connected")).catch(err => console.log(err));
    this.db = mongoose.connection
  }

  connect() {
    return mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }

  create(collection, data, callback) {
    switch (collection) {
      case 'events':
        Event.findOne({_id: data._id}, (err, event) => {
          if (event === null) {
            return Event.create(data)
          } else {
            return new Promise((resolve, reject) => reject('Event already exists.'));
          }
        })
        break;

      case 'projects':
        Project.findOne({_id: data._id}, (err, project) => {
          if (project === null) {
            return Project.create(data)
          } else {
            return new Promise((resolve, reject) => reject('Project already exists.'));
          }
        })
        break;

      case 'videos':
        Video.findOne({_id: data._id}, (err, video) => {
          if (video === null) {
            return Video.create(data)
          } else {
            return new Promise((resolve, reject) => reject('Video already exists.'));
          }
        })
        break;

      default:
        return new Promise((resolve, reject) => reject('Collection does not exist'));
    }
  }

  readAll(collection) {
    switch (collection) {
      case 'events':
        return Event.find({}).exec();
      case 'projects':
        return Project.find({}).exec();
      case 'videos':
        return Video.find({}).exec();
      default:
        return new Promise((resolve, reject) => reject('Collection does not exist'));
    }
  }

//   async update(collection, data) {
//     switch (collection) {
//       case 'events':
//         try {
//           let event = await Event.findOne(data.id);
//           if (!event) {
//             console.log('Event does not exist!');
//             return;
//           }
//           event = {
//             name: 'updated'
//           }
//           await event.save();
//           console.log(event);
//           return event;
//         } catch (err) {
//           console.error(err.message);
//         }
//         break;
//
//       case 'projects':
//         try {
//           let project = await Project.findOne(data);
//           if (!project) {
//             console.log('Project does not exist!');
//             return;
//           }
//           project = {
//             name: 'updated'
//           }
//           await project.save();
//           console.log(project);
//           return project;
//         } catch (err) {
//           console.error(err.message);
//         }
//         break;
//
//       case 'videos':
//         try {
//           let video = await Video.findOne(data);
//           if (!video) {
//             console.log('Video does not exist!');
//             return;
//           }
//           video = {
//             name: 'updated'
//           }
//           await video.save();
//           console.log(video);
//           return video;
//         } catch (err) {
//           console.error(err.message);
//         }
//         break;
//
//       default:
//         console.log('Collection not found!');
//         break;
//     }
//   }
//
//   async delete(collection, data) {
//     switch (collection) {
//       case 'events':
//         try {
//           const event = await Event.findById(data.id);
//           await event.remove();
//           console.log('Event removed!');
//         } catch (err) {
//           console.error(err.message);
//         }
//         break;
//
//       case 'projects':
//         try {
//           const project = await Project.findById(data.id);
//           await project.remove();
//           console.log('Project removed!');
//         } catch (err) {
//           console.error(err.message);
//         }
//         break;
//
//       case 'videos':
//         try {
//           const video = await Video.findById(data.id);
//           await video.remove();
//           console.log('Video removed!');
//         } catch (err) {
//           console.error(err.message);
//         }
//         break;
//
//       default:
//         console.log('Collection not found!');
//         break;
//     }
//   }
}

module.exports = new Database();