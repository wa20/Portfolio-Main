import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Footer from '../../components/footer/footer'
import ProjectCard from '../../components/tempPortfolio/projectCard'
// import LogoList from '../../components/portfolioCarousel/carousel'
import "./portfolioPage.css"



import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 50, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item href="/Home" as="a">
                  Home
                </Menu.Item>
                <Menu.Item href="/About" as="a">
                  About
                </Menu.Item>
                <Menu.Item href="/Portfolio" as="a" active>
                  Portfolio
                </Menu.Item>
                <Menu.Item href="/Contact" as="a">
                  Contact
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                   
                    inverted={!fixed}
                    negative={fixed}
                    style={{ marginLeft: "0.5em" }}
                    href="https://drive.google.com/file/d/1WcWu-vKQkrtqT1QYOtF7RANKxVSpicC6/view?usp=sharing"
                    target="_blank"
                  >
                    View Resume
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item href="/Home" as="a">
              Home
            </Menu.Item>
            <Menu.Item href="/About" as="a">
              About
            </Menu.Item>
            <Menu.Item href="/Portfolio" as="a" active>
              Portfolio
            </Menu.Item>
            <Menu.Item href="/Contact" as="a">
              Contact
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 50, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      inverted
                      
                      style={{ marginLeft: "0.5em" }}
                      href="https://drive.google.com/file/d/1WcWu-vKQkrtqT1QYOtF7RANKxVSpicC6/view?usp=sharing"
                    target="_blank"
                  >
                    View Resume
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              {/* <HomepageHeading mobile /> */}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};



const Portfolio = () => {
  


 return (
   <div>
  <ResponsiveContainer>

<div >
    <Container textAlign="center" style={{ padding: "3em 0em",  width: "100vw"}} >
      <h2>Projects</h2>
    </Container>
    <Container  style={{ padding: "1em 0em",  width: "85vw"}} >
               
          <ProjectCard/>
       
    </Container>

    {/* <Container textAlign="center" style={{ padding: "2em 0em",  width: "100vw"}} >
      <h2>Languages and Tools Used</h2>
    </Container> */}

    {/* <LogoList/> */}
 </div>
    <Footer />
  </ResponsiveContainer>
  </div>
 )
 };

export default Portfolio;
