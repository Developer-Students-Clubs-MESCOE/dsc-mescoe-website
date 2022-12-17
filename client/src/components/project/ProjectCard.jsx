import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';
import { ResponsiveEmbed, Modal } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

class ProjectCard extends Component {
  state = {
    openUp: true,
    open: false,
    card: null,
    cardWidth: 700,
    cardHeight: 900
  };

  componentDidMount() {
    if (window.innerWidth <= 1024) {
      this.setState({
        cardWidth: window.innerWidth * 0.8,
        cardHeight: window.innerHeight * 0.8
      });
    }
  }

  toggleEventModal = () => {
    this.setState({ open: !this.state.open });
  };

  clickEvent = (card) => {
    this.setState({ card: card });
    this.toggleEventModal();
  };
  render() {
    const project = this.props.project;
    return (
      <React.Fragment>
        {this.state.card ? (
          <Modal
            style={{ zIndex: 9999 }}
            size='lg'
            show={this.state.open}
            onHide={() => {
              this.toggleEventModal();
            }}
            onShow={() => {
              if (JSON.parse(localStorage.getItem('isDarkMode'))) {
                document.querySelectorAll('.event-modal').forEach((e) => {
                  e.classList.toggle('dark-mode');
                });
              }
            }}
            centered>
            <Card
              style={{
                boxShadow: `-10px -10px #34A852`,
                borderRadius: 10,
                border: `2px solid #34A852`
              }}
              className=''>
              <CardActionArea>
                <ResponsiveEmbed aspectRatio='16by9'>
                  <CardMedia
                    image={project.image}
                    component='img'
                    title='Event Image'
                  />
                </ResponsiveEmbed>
                <CardContent
                  style={{
                    backgroundColor: 'var(--white)',
                    color: 'var(--black)'
                  }}>
                  <p
                    className='p-0 m-0'
                    style={{ fontSize: 16, fontWeight: 'normal' }}>
                    <b>{project.title}</b>
                    <br />
                    <b>Description: </b>
                    {project.description}
                    <br />
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  backgroundColor: 'var(--white)',
                  color: 'var(--black)'
                }}>
                {project.github ? (
                  <Button
                    href={project.github}
                    target='_blank'
                    style={{ color: '#000000' }}>
                    <GitHubIcon />
                  </Button>
                ) : null}
                {project.youtube ? (
                  <Button
                    href={project.youtube}
                    target='_blank'
                    style={{ color: '#ff0000' }}>
                    <YouTubeIcon />
                  </Button>
                ) : null}
              </CardActions>
            </Card>
          </Modal>
        ) : null}
        <Card
          style={{
            boxShadow: `-10px -10px #34A852`,
            borderRadius: 10,
            border: `2px solid #34A852`
          }}
          className=''>
          <CardActionArea>
            <ResponsiveEmbed aspectRatio='16by9'>
              <CardMedia
                image={project.image}
                component='img'
                title='Event Image'
              />
            </ResponsiveEmbed>
            <CardContent
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--black)'
              }}>
              <h6 className='p-0 m-0'>{project.title}</h6>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>
            <Button
              style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}
              onClick={() => {
                this.clickEvent(project);
              }}>
              View Description
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
