import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu } from 'react-mdl'
import { Link } from 'react-router-dom'


import './ProjTabs.css'

import { myProjects } from '../ProjectType/ProjectsData'

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
                <Cell className="col-xs-4">
                  <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} key={index}>
                    <CardTitle style={{ height: "176px", background: `url(${project.video}) center / cover` }}>{project.name}</CardTitle>
                    <CardText><strong>{project.languages}</strong></CardText>
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
      <div className="category-tabs" id="projects" >
        <h1 className="text-center font-details pb-4">PROJECTS</h1>
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`, borderRadius: "25px" }}>



          <style type="text/css">
            {`
          
        .tab-style{
          font-family: 'Pathway Gothic One', sans-serif;
          color:white;
          font-weight:100;
          font-size: 20px;    
          font-weight: bold;
          }
        .mdl-tabs.is-upgraded .mdl-tabs__tab.is-active{
          color:black;
          text-shadow: #FC0 1px 0 10px;
          }
          `}

          </style>

          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
            <Tab className="tab-style">Fullstack</Tab>
            <Tab className="tab-style">Videography</Tab>
            <Tab className="tab-style">IGTV</Tab>

          </Tabs>

          <div className="content">{this.toggleCategories()}</div>
        </div>

      </div>
    )
  }


}

export default ProjTabs;


