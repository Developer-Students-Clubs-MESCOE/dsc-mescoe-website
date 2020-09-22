
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const eventRouter = require('./routes/event');
const projectRouter = require('./routes/project');
const videoRouter = require('./routes/video');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/events', eventRouter);
app.use('/projects', projectRouter);
app.use('/videos', videoRouter);

module.exports = app;
