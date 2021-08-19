import React from 'react';
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
import { Link } from "react-router-dom";
// import '../../assets/projectImages/'




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function ProjectCard(projects) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

  <div>
    
  {projects && 
  projects.map((project) => (    
    <Card className={classes.root}>
      <CardHeader title=""/>
      <Link>
      <CardMedia className={classes.media} image={`../../assets/projectImages/${project.image}`} title={project.name}/>
      </Link>
      <CardContent>
      <Typography gutterBottom variant="h5" component="h4" style={{ padding: '0em 1em'}}>
            {project.name}
      </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Project:</Typography>
          <Typography paragraph>
            {project.description}
          </Typography>
        </CardContent>
        <CardContent>
        <Button href={project.repo} variant="outlined">View Repo</Button>
        <Button ref={project.site} variant="outlined">View Site</Button>
        </CardContent>
        
      </Collapse>
    </Card>
    ))}
       

    
  </div>   
  );
}