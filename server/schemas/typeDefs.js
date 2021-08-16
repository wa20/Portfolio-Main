const { gql } = require('apollo-server-express');

const typeDefs = gql

`
  type Project {
    _id: ID
    name: String
    description: String
    image: String
  }  

  
  type Query {
    project(_id: ID!): Project
  }
  
`;

module.exports = typeDefs;
