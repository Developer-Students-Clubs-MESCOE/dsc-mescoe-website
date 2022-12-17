const express = require("express");
const database = require("../db/Database");
const Video = require("../db/models/Video");
const mongoose = require("mongoose");

const videoRouter = express.Router();

videoRouter.get("/", (req, res, next) => {
  database
    .readAll("videos")
    .then(videos => {
      res.status(200).json(videos);
    })
    .catch(err => console.log(err));
});

videoRouter.get("/top3", (req, res, next) => {
  database
    .readTop("videos", 3)
    .then(videos => {
      res.status(200).json(videos);
    })
    .catch(err => console.log(err));
});

videoRouter.post("/", (req, res, next) => {
  const videos = new Video({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    url: req.body.url,
    description: req.body.description
  });
  videos
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "handling post request to /api/videos",
        video: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

  videoRouter.get("/:videoId", (req, res, next) => {
    const id = req.params.videoId;
    console.log(id);
    Video.findById(id)
      .exec()
      .then(result => {
        console.log("from database", result);
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "no valid entry found" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

  videoRouter.patch("/:videoId", (req, res, next) => {
    const id = req.params.videoId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Video.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });

  videoRouter.delete("/:videoId", (req, res, next) => {
    const id = req.params.videoId;
    Video.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "deleted video",
          deletedVideo: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

module.exports = videoRouter;
