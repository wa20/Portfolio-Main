import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import Footer from '../../components/footer/footer'
import Hero from '../../components/hero/hero'

import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import './homePage.css'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

// const HomepageHeading = ({ mobile }) => (
//     <Container text>
//       <Header
//         as="h1"
//         content=""
//         inverted
//         style={{
//           fontSize: mobile ? "2em" : "4em",
//           fontWeight: "normal",
//           marginBottom: 0,
//           marginTop: mobile ? "1.5em" : "3em",
//         }}
//       />
//       <Button href="/About" inverted color='red' 
//       size="huge"
//       className="neon-text"
//         style={{
//           fontSize: mobile ? "1.5em" : "1.7em",
//           fontWeight: "normal",
//           marginTop: mobile ? "0.5em" : "1.5em",
//         }}
//       >
//         Hi I'm Wael
//         <Icon name="chevron right"/>
//       </Button>
//     </Container>
//   );
  
  // HomepageHeading.propTypes = {
  //   mobile: PropTypes.bool,
  // }
  
  
  class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Media greaterThan='mobile'>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 50, padding: '2em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                <Menu.Item href="/" as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item href="/About" as="a">About</Menu.Item>
                <Menu.Item href="/Portfolio" as="a">Portfolio</Menu.Item>
                <Menu.Item href="/Contact" as="a">Contact</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: "0.5em" }}
                    href="https://drive.google.com/file/d/16sMu4ubQx8U-Vs7X5kYzkAhZ0LvD6aTA/view?usp=sharing"
                    target="_blank"
                  >
                    View Resume
                  </Button>
                </Menu.Item>
              </Container>
              </Menu>
              {/* <HomepageHeading /> */}
            </Segment>
          </Visibility>
  
          {children}
        </Media>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
  
  class MobileContainer extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Media as={Sidebar.Pushable} at="mobile" style={{height:"100vh"}}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            
          >
            <Menu.Item href="/Home" as="a" active>
              Home
            </Menu.Item>
            <Menu.Item href="/About" as="a">About</Menu.Item>
            <Menu.Item href="/Portfolio" as="a">Portfolio</Menu.Item>
            <Menu.Item href="/Contact" as="a">Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 50, padding: "2em 1em" }}
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
                      href="https://drive.google.com/file/d/16sMu4ubQx8U-Vs7X5kYzkAhZ0LvD6aTA/view?usp=sharing"
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
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  
  const ResponsiveContainer = ({ children }) => (
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }
  
  const Home = () => (
    <ResponsiveContainer>
      
      
     <div style={{position: 'relative', top: 0, width: '100%'}}>
      <Hero/>
      </div>
      <div style={{position: 'relative', bottom: 0, width: '100%'}}>
      <Footer />
      </div>
    
    </ResponsiveContainer>
  )
  
  export default Home