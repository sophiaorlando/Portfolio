import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import VideoPage from './pages/VideoPage/VideoPage'
import IGTVPage from './pages/IGTVPage/IGTVPage'
import {myProjects} from '../src/components/Projects/ProjectsData'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';



ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/projectpage/:id" render={props => <ProjectPage currentProj={myProjects}/>}>
          {/* <ProjectPage/> */}
        </Route>
        <Route path="/videopage/:id" render={props => <VideoPage currentProj={myProjects}/>}>
          {/* <Videography Page/> */}
        </Route>
        <Route path="/igtvpage/:id" render={props => <IGTVPage currentProj={myProjects}/>}>
          {/* <Videography Page/> */}
        </Route>
        <Route exact path="/" component={App}>
          {/* App */}
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
  ,
  document.getElementById('root')
);
