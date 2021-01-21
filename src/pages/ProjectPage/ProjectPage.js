import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FullStackProjects from '../../components/ProjectType/FullStackProjects';
import VideographyProjects from '../../components/ProjectType/VideographyProjects';
import IGTVProjects from '../../components/ProjectType/IGTVProjects';
import AllProjects from '../../components/ProjectType/AllProjects';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    backgroundImage: `url("https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
    borderRadius: "25px"
  },
  AppBar: {
    backgroundColor: "black",

    color: "white",
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="projects">
      <h1 className="text-center font-details pb-4">PROJECTS</h1>
      <div className={classes.root}>

        <AppBar position="static" className={classes.AppBar}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="All Projects" {...a11yProps(0)} />
            <Tab label="Full Stack " {...a11yProps(1)} />
            <Tab label="Videography" {...a11yProps(2)} />
            <Tab label="IGTV" {...a11yProps(3)} />

          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AllProjects />

        </TabPanel>
        <TabPanel value={value} index={1}>
          <FullStackProjects />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VideographyProjects />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <IGTVProjects />
        </TabPanel>
      </div>
    </div>
  );
}
