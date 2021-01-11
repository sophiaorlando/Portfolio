import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import {myProjects} from '../src/components/Projects/ProjectsData'



ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/projectpage/:id" render={props => <ProjectPage currentProj={myProjects}/>}>
          {/* <ProjectPage/> */}
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
