import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Button, Icon } from "semantic-ui-react";
import ProjectSchema from "./projectSchema";
import "./projectCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <div className="grid">
      {ProjectSchema.map((project) => (
        <div>
          <Card
            className={classes.root}
            style={{ margin: "20px", marginBottom: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href={`${project.repo}`} variant="outlined"><Icon disabled name="github"/> View Repo</Button>
     <Button href={`${project.site}`} variant="outlined"><Icon disabled name="tv"/> View Site</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
