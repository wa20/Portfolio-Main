import React from "react";
import { Grid, Header, Image, Segment} from "semantic-ui-react";
// import './style.css'

const avatar = require("../../assets/me-bws.jpg").default;

const AboutSection = () => {
  return (
    <Segment  style={{ padding: "5em 0em"}} vertical>
      <Grid container stackable verticalAlign="middle" >
        <Grid.Row textAlign="center" >
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Hi, I'm Wael!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Former media and insight analyst in the world of consumer data
              now turned <b>Full Stack Web Developer</b>. If I'm not behind a
              laptop coding away building websites then I'm outdoors with my
              trusty SLR snapping the world around me.
            </p>
          </Grid.Column>
          
          <Grid.Column floated="right" width={6} style={{height:400}}>
            <Image bordered rounded  src={avatar} alt="jpg wael" />
          </Grid.Column>
         
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default AboutSection;
