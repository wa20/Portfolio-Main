const mongoose = require('mongoose');
const { Project } = require('.');

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
