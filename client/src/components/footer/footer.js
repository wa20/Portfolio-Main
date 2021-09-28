import React from 'react'
import {
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment,
} from 'semantic-ui-react'
import "./footer.css"


const Footer = () => (
    <Segment inverted vertical style={{ padding: "4em 2em" }} className="footer">
    <Container>
      <Grid inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contact" />
            <List link inverted>
              <List.Item href="https://www.linkedin.com/in/wael20/" target='_blank' as="a"><Icon name='linkedin'/> LinkedIn</List.Item>
              <List.Item href="https://github.com/wa20" target='_blank' as="a"><Icon  name='github'/> GitHub</List.Item>
              <List.Item href="/contact"  as="a"><Icon name='mail'/> Email</List.Item>
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
