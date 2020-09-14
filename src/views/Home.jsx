import {Toolbar} from '@material-ui/core';
import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Typical from 'react-typical';

import gdgLogo from "../assets/img/gdg_logo.png";
import gdgWordmark from "../assets/img/gdg_wordmark.png";
import dscHomeImage from "../assets/img/dsc_home_image.webp";


export default class Home extends React.Component {
  componentDidMount() {
    document.title = 'Home - DSC MESCOE';
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 120) {
      document.querySelectorAll('.dsc-brand').forEach(e => {
        if (e.classList.contains('fade-out-animation'))
          e.classList.remove('fade-out-animation')
        e.classList.add('fade-in-animation')
      });
      document.querySelector('header').classList.replace('MuiPaper-elevation0', 'MuiPaper-elevation4')

    } else {
      document.querySelectorAll('.dsc-brand').forEach(e => {
        if (e.classList.contains('fade-in-animation'))
          e.classList.remove('fade-in-animation')
        e.classList.add('fade-out-animation')
        document.querySelector('header').classList.replace('MuiPaper-elevation4', 'MuiPaper-elevation0')
      });
    }
  }

  render() {
    return (
      <Toolbar style={{marginLeft: 100, marginRight: 100}} className="p-0 mt-5">
        <Container fluid className='mt-5'>
          <Row>
            <Col className='my-auto'>
              <Row ref={node => this.brand = node}>
                <Col xs="1" className="p-0 my-auto">
                  <Link to="/">
                    <Image src={gdgLogo} style={{width: '100%'}}/>
                  </Link>
                </Col>
                <Col xs="11" className="p-0 my-auto px-3">
                  <Link
                    to="/"
                    style={{
                      fontSize: 32,
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}
                  >
                    DSC MESCOE
                  </Link>
                </Col>
              </Row>
              <Row className='mt-4'>
                <Col xs="3" className="p-0 mr-n3">
                  <p
                    className='p-0 m-0'
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}
                  >
                    Powered by
                  </p>
                </Col>
                <Col xs="5" className="p-1">
                  <a href="https://gdg.community.dev/" target='blank'>
                    <Image src={gdgWordmark} style={{width: '95%'}}/>
                  </a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col className="p-0 mr-5">
                  <p
                    className='p-0 m-0'
                    style={{
                      fontSize: 20,
                      fontWeight: "normal",
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}
                  >
                    Our aim at DSC MESCOE is to learn and teach. Developers, designers and managers come together under
                    one roof to create a community which inspires others.
                  </p>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col className="p-0">
                  <p
                    className='p-0 m-0'
                    style={{
                      fontSize: 20,
                      fontWeight: "normal",
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}
                  >
                    Building
                    <Typical
                      loop={Infinity}
                      wrapper="React.Fragment"
                      steps={[' a strong community.', 3000 ,' fortis civitas.', 3000]}
                    />
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Image src={dscHomeImage} style={{width: '100%', borderRadius: 30, boxShadow: "-25px -30px #4385F4"}}/>
            </Col>
          </Row>
        </Container>
      </Toolbar>
    );
  }
}
