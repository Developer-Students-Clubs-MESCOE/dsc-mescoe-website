import {Toolbar} from '@material-ui/core';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {resetFooterStyle, resetNavStyle, serverURL} from "../utils/utils";
import axios from 'axios'
import VideoCard from "../components/video/VideoCard";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    document.title = 'Videos - DSC MESCOE';
    resetNavStyle({page: 'Videos'});

    axios.get(`${serverURL}/api/videos`)
      .then(res => {
        this.setState({videos: res.data});
        if (JSON.parse(localStorage.getItem('isDarkMode'))) {
          document.querySelectorAll('.video').forEach(e => {
            e.classList.toggle('dark-mode')
          })
        }
      })
      .catch(err => console.error(err.message));
  }

  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle()
    }
    return (
      <Toolbar className="grid">
        <Container>
          <h3 className="mt-5 video" style={{color: '#EA4435'}}>Videos</h3>
          <Row className="ml-3">
            {this.state.videos.map((video, index) => <Col xs="12" key={index} className="p-0 pr-4 mt-5 video" md="6" lg="4">
              <VideoCard video={video}/>
            </Col>)}
          </Row>
          <Row className='mb-5 '/>
          <Row className='mb-5 '/>
        </Container>
      </Toolbar>
    );
  }
}
