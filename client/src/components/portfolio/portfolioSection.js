import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Button,
  // Container,
  // Divider,
  // Grid,
  // Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  // Segment,
  // Sidebar,
  // Visibility,
} from "semantic-ui-react";

// import React, { useEffect } from 'react';
import ProjectCard from './portfolioCard';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PROJECTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


function PortfolioSection() {
    const [state, dispatch] = useStoreContext();
  
    const { currentPortfolio } = state;
  
    const { loading, data } = useQuery(QUERY_PROJECTS);
  
    useEffect(() => {
      if (data) {
        dispatch({
          type: UPDATE_PROJECTS,
          projects: data.projects,
        });
        data.projects.forEach((project) => {
          idbPromise('projects', 'put', project);
        });
      } else if (!loading) {
        idbPromise('projects', 'get').then((projects) => {
          dispatch({
            type: UPDATE_PROJECTS,
            projects: projects,
          });
        });
      }
    }, [data, loading, dispatch]);
  
    function filterProjects() {
        if (!currentPortfolio) {
          return state.projects;
        }
    
        return state.projects.filter(
          (project) => project.portfolio._id === currentPortfolio
        );
      }
  
      
  
    return (
      <div className="my-2">
        <h2>Our Products:</h2>
        {state.projects.length ? (
          <div className="flex-row">
            {filterProjects().map((project) => (
              <ProjectCard
                key={project._id}
                _id={project._id}
                image={project.image}
                description={project.description}
                name={project.name}
                repo={project.repo}
                site={project.site}
              />
            ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
       
      </div>
    );
  }
  
  export default PortfolioSection;
  
