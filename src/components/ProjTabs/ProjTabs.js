import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu } from 'react-mdl'
import { Link } from 'react-router-dom'


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
            {myProjects.fullStack.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ height: "176px", background: `url(${project.video}) center / cover` }}>{project.name}</CardTitle>
                    <CardText>{project.languages}</CardText>
                    <CardText>{project.description}</CardText>
                    <CardActions border>
                      <a href={project.github} target="_blank">
                        <Button className="m-2" variant="outline colorType">
                          Github
                      </Button>
                      </a>
                      <a href={project.url} target="_blank">
                        <Button className="m-2" variant="outline colorType">
                          Preview
                      </Button>
                      </a>
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
            {myProjects.videography.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ height: "176px", background: `url(${project.imgSrc}) center / cover` }}>{project.name}</CardTitle>
                    <CardText>{project.description}</CardText>
                    <CardActions border>
                    <a href={project.url} target="_blank">
                        <Button className="m-2" variant="outline colorType">
                          Preview
                      </Button>
                      </a>

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
            {myProjects.igtv.map((project, index) => (
              <div>
                <Cell col={4}>
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ height: "176px", background: `url(${project.imgSrc}) center / cover` }}>{project.name}</CardTitle>
                    <CardText>{project.description}</CardText>
                    <CardActions border>
                    <a href={project.url} target="_blank">
                        <Button className="m-2" variant="outline colorType">
                          Preview
                      </Button>
                      </a>

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
      <div className="category-tabs" id="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Fullstack</Tab>
          <Tab>Videography</Tab>
          <Tab>IGTV</Tab>

        </Tabs>

        <div className="content">{this.toggleCategories()}</div>


      </div>
    )
  }


}

export default ProjTabs;


