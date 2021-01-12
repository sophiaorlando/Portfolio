import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu } from 'react-mdl'

import './ProjTabs.css'

import { myProjects } from '../Projects/ProjectsData'

class ProjTabs extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid>
            {myProjects.all.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>{project.name}</CardTitle>
                    <CardText>
                      This is dummy text</CardText>
                    <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Code</Button>
                      <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                    </CardMenu>
                  </Card>
                </Cell>
              </div>

            ))}
          </Grid>
        </div>

      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            {myProjects.fullStack.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>{project.name}</CardTitle>
                    <CardText>
                      This is dummy text</CardText>
                    <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Code</Button>
                      <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                    </CardMenu>
                  </Card>
                </Cell>
              </div>

            ))}
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Grid>
            {myProjects.videography.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>{project.name}</CardTitle>
                    <CardText>
                      This is dummy text</CardText>
                    <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Code</Button>
                      <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                    </CardMenu>
                  </Card>
                </Cell>
              </div>

            ))}
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Grid>
            {myProjects.igtv.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>{project.name}</CardTitle>
                    <CardText>
                      This is dummy text</CardText>
                    <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Code</Button>
                      <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                    </CardMenu>
                  </Card>
                </Cell>
              </div>

            ))}
          </Grid>
        </div>
              )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          <Tab>Fullstack</Tab>
          <Tab>Videography</Tab>
          <Tab>IGTV</Tab>

        </Tabs>
        {/* <Grid>
          <Cell col={4}> */}
        <div className="content">{this.toggleCategories()}</div>
        {/* </Cell>
        </Grid> */}

      </div>
    )
  }


}

export default ProjTabs;


