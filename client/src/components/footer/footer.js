// import React from 'react'
import React from 'react'
// import { createMedia } from '@artsy/fresnel'
// import PropTypes from 'prop-types'
import {
    // Button,
    Container,
    // Divider,
    Grid,
    Header,
    Icon,
    // Image,
    List,
    // Menu,
    Segment,
    // Sidebar,
    // Visibility,
} from 'semantic-ui-react'

// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// })

const Footer = () => (
    <Segment inverted vertical style={{ padding: "4em 2em" }}>
    <Container>
      <Grid inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contact" />
            <List link inverted>
              <List.Item as="a"><Icon name='linkedin'/> LinkedIn</List.Item>
              <List.Item as="a"><Icon name='github'/> GitHub</List.Item>
              <List.Item as="a"><Icon name='mail'/> Email</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as="h4" inverted>
              Coding Proverb 101
            </Header>
            <p>
              Today, only God and I know why I wrote this code. Tomorrow, only
              God knows why I wrote this code.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
