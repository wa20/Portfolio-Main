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

  // let siteButton = project.site

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
              {project.repo.length > 0 ? (
                <Button href={`${project.repo}`} variant="outlined">
                  <Icon disabled name="github" /> View Repo
                </Button>
              ) : (
                <Button disabled href={`${project.repo}`} variant="outlined">
                  <Icon disabled name="github" /> Repo N/A
                </Button>
              )}

              {project.site.length > 0 ? (
                <Button href={`${project.site}`} variant="outlined">
                  <Icon disabled name="tv" /> View Site
                </Button>
              ) : (
                <Button disabled href={`${project.site}`} variant="outlined">
                  <Icon disabled name="tv" />
                  Site N/A
                </Button>
              )}
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
