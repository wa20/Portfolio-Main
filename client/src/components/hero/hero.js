import React from "react";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
import "./style.css";
import { hidden } from "colors";

const Hero = () => {
  return (
    <div>
      <Segment
        inverted
        style={{ padding: "0em 0em" }}
        vertical
        style={{ height: "70vh" }}
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
