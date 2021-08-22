import { gql } from '@apollo/client';



export const QUERY_PROJECTS = gql`
  query getProjects($portfolio: ID) {
    projects(portfolio: $portfolio) {
      _id
      name
      description
      site
      repo
      image
      portfolio {
        _id
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
      portfolio {
        name
      }
    }
  }
`;


export const QUERY_PORTFOLIOS = gql`
  {
    portfolios {
      _id
      name
    }
  }
`;