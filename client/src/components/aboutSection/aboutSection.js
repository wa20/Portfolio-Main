import React from "react";
import { Grid, Header, Image, Segment, Popup } from "semantic-ui-react";
import './aboutSection.css'

const bootstrap = require("../../assets/techSVGLogo/bootstrap-plain-wordmark.svg").default;
const bulma = require("../../assets/techSVGLogo/bulma-plain.svg").default;
const css3 = require("../../assets/techSVGLogo/css3-plain-wordmark.svg").default;
const express = require("../../assets/techSVGLogo/express-original-wordmark.svg").default;
const git = require("../../assets/techSVGLogo/git-original-wordmark.svg").default;
const github = require("../../assets/techSVGLogo/github-original-wordmark.svg").default;
const graphQL = require("../../assets/techSVGLogo/graphql-plain-wordmark.svg").default;
const handlebars = require("../../assets/techSVGLogo/handlebars-original-wordmark.svg").default;
const html5 = require("../../assets/techSVGLogo/html5-plain-wordmark.svg").default;
const illustrator = require("../../assets/techSVGLogo/illustrator-plain.svg").default;
const javascript = require("../../assets/techSVGLogo/javascript-original.svg").default;
const jquery = require("../../assets/techSVGLogo/jquery-original-wordmark.svg").default;
const materialui = require("../../assets/techSVGLogo/materialui-original.svg").default;
const mongodb = require("../../assets/techSVGLogo/mongodb-original-wordmark.svg").default;
const mysql = require("../../assets/techSVGLogo/mysql-original-wordmark.svg").default;
// const nextjs = require("../../assets/techSVGLogo/nextjs-original-wordmark.svg").default;
const nodejs = require("../../assets/techSVGLogo/nodejs-original-wordmark.svg").default;
// const npm = require("../../assets/techSVGLogo/npm-original-wordmark.svg").default;
const photoshop = require("../../assets/techSVGLogo/photoshop-plain.svg").default;
const react = require("../../assets/techSVGLogo/react-original-wordmark.svg").default;
// const redux = require("../../assets/techSVGLogo/redux-original.svg").default;
const sequelize = require("../../assets/techSVGLogo/sequelize-original-wordmark.svg").default;

// const avatar = require("../../assets/me-bws.jpg").default;

const AboutSection = () => {
  return (
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Grid container fluid stackable verticalAlign="middle">
        <Grid.Row >
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Hi, I'm Wael!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <b>Full Stack Web Developer</b> leveraging a background as a
              former media and insight analyst in the world of Consumer Data.
              Passionate about building apps and creating innovative & engaging
              user experiences. If I'm not behind a laptop coding away building
              websites then I'm outdoors with my trusty SLR snapping the world
              around me.
            </p>

            <Header style={{ fontSize: "1.3em" }}>
              Experienced with the following <b>Tools</b> and <b>Langauages</b>:
            </Header>
            <Grid style={{ fontSize: "1.33em" }}>
              <Grid.Row columns={4}>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={react} alt={react} className="scale"/>}
                  content='React.js'
                  position='top center'
                  inverted
                />

                </Grid.Column>
                <Grid.Column>
                  <Popup
                  trigger={<Image size="tiny" src={graphQL} alt={graphQL} className="scale" />}
                  content='GraphQL'
                  position='top center'
                  inverted
                />
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={ <Image size="tiny" src={nodejs} alt={nodejs} className="scale"/>}
                  content='Node.js'
                  position='top center'
                  inverted
                />                 
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={javascript} alt={javascript} className="scale"/>}
                  content='Javascript ES6+'
                  position='top center'
                  inverted
                />                 
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={5}>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={express} alt={express} className="scale" />}
                  content='Express'
                  position='top center'
                  inverted
                />                
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="small" src={sequelize} alt={sequelize} className="scale" />}
                  content='Sequelize'
                  position='top center'
                  inverted
                />                 
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={mongodb} alt={mongodb} className="scale" />}
                  content='Sequelize'
                  position='top center'
                  inverted
                /> 
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={ <Image size="tiny" src={mysql} alt={mysql} className="scale"/>}
                  content='mySQL'
                  position='top center'
                  inverted
                />               
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={  <Image size="tiny" src={handlebars} alt={handlebars} className="scale" />}
                  content='Handlebars'
                  position='top center'
                  inverted
                />
              
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={5}>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={jquery} alt={jquery} className="scale"/>}
                  content='jQuery'
                  position='top center'
                  inverted
                />              
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={css3} alt={css3} className="scale"/>}
                  content='CSS3'
                  position='top center'
                  inverted
                />             
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={html5} alt={html5} className="scale"/>}
                  content='HTML5'
                  position='top center'
                  inverted
                />
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={git} alt={git} className="scale" />}
                  content='Git'
                  position='top center'
                  inverted
                />             
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={github} alt={github} className="scale"/>}
                  content='GitHub'
                  position='top center'
                  inverted
                />
                  
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={5}>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={bootstrap} alt={bootstrap} className="scale"/>}
                  content='Bootstrap'
                  position='top center'
                  inverted
                />
                  
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={materialui} alt={materialui} className="scale"/>}
                  content='Material UI'
                  position='top center'
                  inverted
                />
                  
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={bulma} alt={bulma} className="scale"/>}
                  content='bulma'
                  position='top center'
                  inverted
                />
                  
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={illustrator} alt={illustrator} className="scale"/>}
                  content='Adobe Illustrator'
                  position='top center'
                  inverted
                />
                  
                </Grid.Column>
                <Grid.Column>
                <Popup
                  trigger={<Image size="tiny" src={photoshop} alt={photoshop} className="scale"/>}
                  content='Adobe Photoshop'
                  position='top center'
                  inverted
                />
                  
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          
          <Grid.Column floated="right" width={8} style={{ height: 700, width:300, borderRadius:'5px',}} className='background'>
            {/* <Image bordered rounded src={avatar} alt="jpg wael" /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default AboutSection;
