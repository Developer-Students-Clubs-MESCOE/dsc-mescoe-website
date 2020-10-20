import {
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import {resetFooterStyle, resetNavStyle, serverURL} from "../utils/utils";
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from "../components/project/ProjectCard";
import {Skeleton} from "@material-ui/lab";


export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],

      title: '',
      description: '',
      image: '',
      youtube: '',
      github: '',

      openUp: true,
      open: false,
      cardWidth: 700,
      cardHeight: 900,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(serverURL, {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      youtube: this.state.youtube,
      github: this.state.github
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.handleClose();
        window.location.reload();
      }).catch(err => {
      console.error(err.message);
    });
  }

  componentDidMount() {
    document.title = 'Projects - DSC MESCOE';
    resetNavStyle({page: 'Projects'});

    axios.get(`${serverURL}/api/projects`)
      .then(res => {
        this.setState({projects: res.data});
        if (JSON.parse(localStorage.getItem('isDarkMode'))) {
          document.querySelectorAll('.project').forEach(e => {
            e.classList.toggle('dark-mode')
          })
        }
      })
      .catch(err => console.error(err.message));
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  clickEvent = () => {
    this.handleOpen();
  }

  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle()
    }
    return (
      <Toolbar className='grid'>
        <Container>
          <Row className="mt-5">
            <Col>
              <h3 style={{color: '#34A852', fontWeight: 600}} className='project'>Projects</h3>
            </Col>
          </Row>
          <Row className="ml-3">
            {this.state.projects.length ? this.state.projects.map((project, index) => <Col xs="12" key={index}
                                                                                           className="p-0 pr-4 mt-5 project"
                                                                                           md="6"
                                                                                           lg="4">
              <ProjectCard project={project}/>
            </Col>) : [0, 1, 2].map((s, index) =>
              <Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
                <Skeleton variant='rect' height={300} style={{borderRadius: 10}}/>
              </Col>
            )}
          </Row>
          <Row className='mb-5'/>
          <Row className='mb-5'/>
        </Container>
      </Toolbar>
    );
  }
}
