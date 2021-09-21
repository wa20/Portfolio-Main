import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// import itemData from './itemData';
import { Image } from "semantic-ui-react";

const js = require("../../assets/techLogo/js.png").default;
const css3 = require("../../assets/techLogo/css3.png").default;
const express = require("../../assets/techLogo/express.png").default;
const html5 = require("../../assets/techLogo/html5.png").default;
const jquery = require("../../assets/techLogo/jquery.png").default;
const mongodb = require("../../assets/techLogo/mongodb.png").default;
const mysql = require("../../assets/techLogo/mysql.png").default;
const node = require("../../assets/techLogo/node.png").default;
const react = require("../../assets/techLogo/react.png").default;
const github = require("../../assets/techLogo/github.png").default;
const graphQL = require("../../assets/techLogo/graphQL.png").default;
const apollo = require("../../assets/techLogo/apollo.png").default;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const itemData = [
  {
    img: react,
    title: "React",
    size: "small",
  },
  {
    img: graphQL,
    title: "GraphQL",
    size: "small",
  },
  {
    img: apollo,
    title: "Apollo",
    size: "small",
  },
  {
    img: node,
    title: "Node.Js",
    size: "small",
  },

  {
    img: js,
    title: "Javascript",
    size: "tiny",
  },
  
  {
    img: express,
    title: "Express.js",
    size: "small",
  },
  {
    img: mongodb,
    title: "MongoDB",
    size: "small",
  },
  {
    img: mysql,
    title: "mySQL",
    size: "small",
  },
  {
    img: github,
    title: "GitHub",
    size: "small",
  },
  {
    img: jquery,
    title: "jQuery",
    size: "tiny",
  },
  {
    img: css3,
    title: "CSS3",
    size: "tiny",
  },
  {
    img: html5,
    title: "HTML5",
    size: "tiny",
  },
  
];

export default function LogoList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.0}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {item.size === "tiny" ? (
              <Image size="tiny" src={item.img} alt={item.title} />
            ) : (
              <Image size="small" src={item.img} alt={item.title} />
            )}
            <ImageListItemBar
              title={item.title}
              style={{ background: "transparent" }}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
