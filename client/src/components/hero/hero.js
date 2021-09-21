import React from "react";
import { Button, Icon, Segment } from "semantic-ui-react";
import "./style.css";
// import { hidden } from "colors";

const Hero = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ padding: "0em 0em" , height: "70vh" }}
        className="flex"
      >
        <div>
          <Button
            className="btn-5"
            href="/About"
            inverted
            color="red"
            size="massive"
            style={{ fontWeight: "normal" }}
          >
            Hi I'm Wael
            <Icon name="chevron right" />
          </Button>
        </div>
      </Segment>
    </div>
  );
};

export default Hero;
