const mongoose = require('mongoose');
//const { Project } = require('../models');

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String
  },
  repo: {
    type: String
  },
  site: {
    type: String
  },
  image: {
    type: String
  },
  portfolio:{
    type: Schema.Types.ObjectId,
    ref: 'Portfolio',
    
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
