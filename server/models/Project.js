// const mongoose = require('mongoose');
//const { Project } = require('../models');

const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String
  },
  Repo: {
    type: String
  },
  site: {
    type: String
  },
  image: {
    type: String
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
