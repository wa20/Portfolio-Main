const { gql } = require('apollo-server-express');

const typeDefs = gql

`
  type Portfolio {
    _id: ID
    name: String
  }

  type Project {
    _id: ID
    name: String
    description: String
    repo: String
    site: String
    image: String
    category: Portfolio
  }  

  
  type Query {
    portfolios: [Portfolio]
    projects(portfolio: ID, name: String): [Project]
    project(_id: ID!): Project
  }
  
`;

module.exports = typeDefs;
