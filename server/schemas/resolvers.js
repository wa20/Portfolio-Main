const { AuthenticationError } = require('apollo-server-express');
const { Project } = require('../models');
// const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  
    // products: async (parent, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }

    //   return await Project.find(params).populate('category');
    // },

    product: async (parent, { _id }) => {
      return await Project.findById(_id).populate('category');
    },
   
    
 

  
};

module.exports = resolvers;
