import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import { myProjects } from './ProjectsData'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  grid: {
    width: "100%",
    margin: "0px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "black",
  },
}));

function ProjectPage(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);



  const handleExpandClick = i => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div>
      {/* <ProjectTabs /> */}
      <Grid container spacing={2} className={classes.grid}>
        {myProjects.fullStack.map((project, i) => (
          <Grid item xs={12} md={4}>

            <Card className={classes.root} key={project.id}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    SMO
          </Avatar>
                }
                title={project.name}
                subheader={project.filterType}
              />
              <CardMedia
                className={classes.media}
                image={project.video}
                title="Paella dish"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => window.open(`${project.github}`)}>
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={() => window.open(`${project.url}`)}>
                  <LaunchIcon />
                </IconButton>
                <IconButton

                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expanded === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{project.description}</Typography>
                </CardContent>
              </Collapse>
            </Card>

          </Grid>

        ))}
      </Grid>

    </div>
  );
}


export default ProjectPage
