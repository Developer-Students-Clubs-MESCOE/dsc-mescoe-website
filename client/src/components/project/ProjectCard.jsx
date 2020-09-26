import React, {Component} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import {ResponsiveEmbed} from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";

class ProjectCard extends Component {
  render() {
    const project = this.props.project
    return (
      <Card style={{
        boxShadow: `-10px -10px #34A852`,
        borderRadius: 10,
        border: `2px solid #34A852`
      }} className=''>
        <CardActionArea>
          <ResponsiveEmbed aspectRatio="16by9">
            <CardMedia image={project.image} component="img" title="Event Image"/>
          </ResponsiveEmbed>
          <CardContent>
            <p className='p-0 m-0' style={{fontSize: 16, fontWeight: "normal",}}>
              <b>{project.title}</b><br/>
              <b>Description: </b>{project.description}<br/>
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project.github ? <Button href={project.github} target="_blank" style={{color: '#000000'}}>
            <GitHubIcon/>
          </Button> : null}
          {project.youtube ? <Button href={project.youtube} target="_blank" style={{color: '#ff0000'}}>
            <YouTubeIcon/>
          </Button> : null}
        </CardActions>
      </Card>
    );
  }
}

export default ProjectCard;