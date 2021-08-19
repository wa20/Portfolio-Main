import { gql } from '@apollo/client';



export const QUERY_PROJECTS = gql`
  query getProjects($projectId: ID) {
    projects(projectId: $projectId) {
      _id
      name
      description
      price
      image
      category {
        _id
        name
      }
    }
  }
`;



export const QUERY_ALL_PROJECTS = gql`
  {
    projects {
      _id
      name
      description
      repo
      site
      }
  }
`;