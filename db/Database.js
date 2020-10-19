const mongoose = require("mongoose");
const mongoURI = require("./default").mongoURI;
const Event = require("./models/Event");
const Project = require("./models/Project");
const Video = require("./models/Video");
const Rank = require("./models/Rank");

class Database {
  constructor() {
    this.connect()
      .then(() => console.info("MongoDB Connected"))
      .catch(err => console.log(err));
    this.db = mongoose.connection;
  }

  connect() {
    return mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  }

  createOrUpdate(collection, data) {
    switch (collection) {
      case "events":
        return Event.findOneAndUpdate(
          { title: data.title },
          { $set: data },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true
          }
        );

      case "projects":
        return Project.findOneAndUpdate(
          { title: data.title },
          { $set: data },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true
          }
        );

      case "videos":
        return Video.findOneAndUpdate(
          { name: data.name },
          { $set: data },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true
          }
        );

      default:
        return new Promise((resolve, reject) => {
          reject("Collection does not exist");
        });
    }
  }

  readAll(collection) {
    switch (collection) {
      case "events":
        return Event.find({}).exec();
      case "projects":
        return Project.find({}).exec();
      case "videos":
        return Video.find({}).sort({date: -1}).exec();
      case "ranks":
        return Rank.find({}).exec();
      default:
        return new Promise((resolve, reject) => {
          reject("Collection does not exist");
        });
    }
  }

  readTop(collection, count) {
    switch (collection) {
      case "events":
        return Event.find({}).sort({'dateTime': 'desc'}).limit(count).exec();
      case "projects":
        return Project.find({}).limit(count).exec();
      case "videos":
        return Video.find({}).sort({'date': 'desc'}).limit(count).exec();
      default:
        return new Promise((resolve, reject) => {
          reject("Collection does not exist");
        });
    }
  }

  readOne(collection, id) {
    switch (collection) {
      case "events":
        return Event.findById(id);
      case "projects":
        return Project.findById(id);
      case "videos":
        return Video.findById(id);
      default:
        return new Promise((resolve, reject) => {
          reject("Collection does not exist");
        });
    }
  }

  delete(collection, id) {
    switch (collection) {
      case "events":
        return Event.findByIdAndRemove(id);

      case "projects":
        return Project.findByIdAndRemove(id);

      case "videos":
        return Video.findByIdAndRemove(id);
      default:
        return new Promise((resolve, reject) => {
          reject("Collection does not exist");
        });
    }
  }
}

module.exports = new Database();
