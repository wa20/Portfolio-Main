// const { AuthenticationError } = require('apollo-server-express');
const { Project } = require('../models');


const resolvers = {
  Query: {
    projects: async () => {
      return Project.find();
    },

    projects: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
  },

}


module.exports = resolvers;
