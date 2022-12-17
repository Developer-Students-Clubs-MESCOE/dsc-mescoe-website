const express = require('express');
const normalize = require('normalize-url');
const database = require('../db/Database')

const Project = require('../db/models/Project');

const projectRouter = express.Router();

// @route    POST api/projects
// @desc     Create or Update a project
// @access   Public
projectRouter.post('/', async (req, res) => {
  const newProject = {
    title: req.body.title,
    description: req.body.description,
    youtube: req.body.youtube && req.body.youtube !== '' ? normalize(req.body.youtube, {forceHttps: true}) : '',
    github: req.body.github && req.body.github !== '' ? normalize(req.body.github, {forceHttps: true}) : '',
    image: req.body.image && req.body.image !== '' ? normalize(req.body.image, {forceHttps: true}) : 'https://via.placeholder.com/800x800?text=DSC+MESCOE'
  }

  try {
    let project = await Project.findOneAndUpdate(
      {title: req.body.title},
      {$set: newProject},
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(project);
  } catch(err){
    console.error(err.message);
      res.status(500).send('Server Error');
  }
});

// @route   GET /api/projects
// @desc    Get all Projects
// @access  Public
projectRouter.get('/', async (req, res) => {
  try {
      const posts = await Project.find().sort({date: -1});
      res.json(posts);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!');
  }
});

// @route   GET /api/projects/top3
// @desc    Get recent 3 Projects
// @access  Public
projectRouter.get("/top3", (req, res, next) => {
  database
    .readTop("projects", 3)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => console.log(err));
});

// @route   GET /api/projects/:id
// @desc    Get Project by id
// @access  Public
projectRouter.get('/:id', async (req, res) => {
  try {
      const project = await Project.findById(req.params.id);
      if (!project) {
          return res.status(404).json({ msg: 'Project not found.' });
      }
      res.json(project);
  } catch (err) {
      console.error(err.message)
      if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'Project not found.' });
      }
      res.status(500).send('Server Error!');
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a Project by ID
// @access  Public
projectRouter.delete('/:id', async (req, res) => {
  try {
      const project = await Project.findById(req.params.id);

      if (!project) {
        return res.status(404).json({ msg: 'Project not found' });
      }

      await project.remove();

      res.json({ msg: 'Project removed.' });
  } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'Project not found.' });
      }
      res.status(500).send('Server Error!');
  }
});

module.exports = projectRouter
