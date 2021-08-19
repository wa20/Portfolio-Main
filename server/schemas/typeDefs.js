const { gql } = require('apollo-server-express');

const typeDefs = gql

`
  type Project {
    _id: ID
    name: String
    description: String
    image: String
    repo: String
    site: String
  }  

  
  type Query {
    projects: [Project]
    project(projectID: ID!): Project
  }
  
`;

module.exports = typeDefs;
