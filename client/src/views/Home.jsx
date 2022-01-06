import { Toolbar, Box } from '@material-ui/core';
import React from 'react';
import { Col, Container, Image, Row, ResponsiveEmbed } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Typical from 'react-typical';
import gdgLogo from '../assets/img/gdg_logo.png';
import gdg_black from '../assets/img/gdg_black.png';
import gdgWordmark from '../assets/img/gdg_wordmark.png';
import dscHomeImage from '../assets/img/new11.gif';

import homeSections from '../data/homeSections';
import HomeSection from '../components/home/HomeSection';
import { resetFooterStyle, resetNavStyle, serverURL } from '../utils/utils';
import Axios from 'axios';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: JSON.parse(localStorage.getItem('isDarkMode')) ? gdg_black : gdgLogo,
      open: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
    console.log(this.state.open);
    console.log('MODAL OPENED');
  }
  handleClose() {
    this.setState({ open: false });
  }

  componentDidMount() {
    document.title = 'Home - GDSC MESCOE';
    resetNavStyle({ page: 'Home' });
    window.addEventListener('scroll', this.handleScroll);

    console.log('MODAL LOADING');

    Axios.get(`${serverURL}/api/events/top3`).then((result) => {
      homeSections[1].cards = result.data;
      Axios.get(`${serverURL}/api/videos/top3`).then((result) => {
        homeSections[2].videos = result.data;
        Axios.get(`${serverURL}/api/projects/top3`).then((result) => {
          homeSections[3].cards = result.data;
          this.setState({})
        });
      });
    });
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.title.includes('Home')) {
      if (this.brand) {
        const bottom = this.brand.getBoundingClientRect().bottom;
        const navBar = document.querySelector('.dsc-nav');
        const navBottom = navBar.getBoundingClientRect().bottom;
        if (bottom <= navBottom) {
          document.querySelectorAll('.dsc-brand').forEach((e) => {
            if (e.classList.contains('fade-out-animation'))
              e.classList.replace('fade-out-animation', 'fade-in-animation');
            else e.classList.add('fade-in-animation');
          });
          navBar.classList.replace(
            'MuiPaper-elevation0',
            'MuiPaper-elevation4'
          );
        } else {
          document.querySelectorAll('.dsc-brand').forEach((e) => {
            if (e.classList.contains('fade-in-animation'))
              e.classList.replace('fade-in-animation', 'fade-out-animation');
            else e.classList.add('fade-out-animation');
          });
          navBar.classList.replace(
            'MuiPaper-elevation4',
            'MuiPaper-elevation0'
          );
        }
      }
    }
  }
  modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vh',
    height:'auto',
    bgcolor: 'background.paper',
  };
  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle();
    }
    return (
        <Toolbar className='grid'>
          <div
            style={{
              backgroundColor: 'var(--transparent)',
              width: '100%',
              margin: '0px',
              padding: '0px'
            }}>
            <Container className='mt-5'>
              <Row className='text-md-left'>
                <Col xs='12' md='6' className='my-auto'>
                  <Row
                    ref={(node) => (this.brand = node)}
                    className='text-left'>
                    <Col xs='3' md='3' xl='2' className='my-auto'>
                      <Link to='/'>
                        <Image
                          src={this.state.img}
                          style={{ width: '100%' }}
                          className='home logo-switch'
                        />
                      </Link>
                    </Col>
                    <Col xs='9' md='9' xl='6' className='my-auto'>
                      <Link
                        to='/'
                        style={{
                          fontSize: 32,
                          color: 'inherit',
                          textDecoration: 'inherit'
                        }}>
                        GDSC MESCOE
                      </Link>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col xs='12' lg='5' xl='4' className='my-auto'>
                      <p
                        className='p-0 m-0'
                        style={{
                          fontSize: 24,
                          fontWeight: 500,
                          color: 'inherit',
                          textDecoration: 'inherit'
                        }}>
                        Powered by
                      </p>
                    </Col>
                    <Col xs='12' lg='5' xl='6' className='my-auto mx-xl-n4'>
                      <a href='https://gdg.community.dev/' target='blank'>
                        <Image
                          src={gdgWordmark}
                          style={{ width: '100%' }}
                          className='home'
                        />
                      </a>
                    </Col>
                  </Row>
                  <Row className='mt-5'>
                    <Col xs='12'>
                      <p
                        className='p-0 m-0'
                        style={{
                          fontSize: 20,
                          fontWeight: 'normal',
                          color: 'inherit',
                          textDecoration: 'inherit'
                        }}>
                        Our aim at GDSC MESCOE is to learn and teach.
                        Developers, designers and managers come together under
                        one roof to create a community which inspires others.
                      </p>
                    </Col>
                  </Row>
                  <Row className='mt-5'>
                    <Col xs='12'>
                      <p
                        className='p-0 m-0'
                        style={{
                          fontSize: 20,
                          fontWeight: 'normal',
                          color: 'inherit',
                          textDecoration: 'inherit'
                        }}>
                        <Typical
                          loop={Infinity}
                          wrapper='span'
                          steps={[
                            'Build good things, together.',
                            2000,
                            '',
                            1000
                          ]}
                        />
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs='12' md='6' className='mt-5'>
                  <Image
                    className='home'
                    src={dscHomeImage}
                    style={{
                      width: '100%',
                      borderRadius: 30
                    }}
                  />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col xs='2' md='1' lg='1' className='mx-auto p-lg-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='50'
                    height='50'
                    fill='var(--black)'
                    class='bi bi-arrow-down'
                    viewBox='0 0 16 16'
                    zIndex='6'>
                    <path
                      fill-rule='evenodd'
                      d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                    />
                  </svg>
                </Col>
              </Row>
              <Row className='mt-4' />
              {homeSections.map((homeSection, key) => (
                <Row key={key} className='mt-5 home'>
                  <HomeSection data={homeSection} index={key} />
                </Row>
              ))}
              <Row className='mb-5' />
              <Row className='mb-5' />
            </Container>
          </div>
        </Toolbar>
    );
  }
}
