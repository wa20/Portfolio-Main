const { AuthenticationError } = require('apollo-server-express');
const { Project, Portfolio } = require('../models');


const resolvers = {
  Query: {
    portfolios: async () => {
      return await Portfolio.find();
    },

    projects: async (parent, { portfolio, name }) => {
      const params = {};

      if (portfolio) {
        params.portfolio = portfolio;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Project.find(params).populate('portfolio');
    },

    // projects: async (parent, { projectId }) => {
    //   return Project.findOne({ _id: projectId });
    // },

    project: async (parent, { _id }) => {
      return await Project.findById(_id).populate('portfolio');
    },

  },

}


module.exports = resolvers;
