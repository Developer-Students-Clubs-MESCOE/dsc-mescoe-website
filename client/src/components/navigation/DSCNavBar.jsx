import React, {Component} from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import gdgLogo from '../../assets/img/gdg_logo.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DSCDrawer from "./DSCDrawer";

export default class DSCNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: JSON.parse(localStorage.getItem('isDarkMode'))
    }
    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('isDarkMode'))) {
      document.querySelector(':root').classList.toggle('dark-mode')
      document.querySelectorAll('.nav-logo').forEach(e => {
        e.classList.toggle('dark-mode')
      })
    }
  }

  handleThemeSwitch() {
    this.setState({isDarkMode: !this.state.isDarkMode})
    localStorage.setItem('isDarkMode', JSON.stringify(!JSON.parse(localStorage.getItem('isDarkMode'))))
    document.querySelector(':root').classList.toggle('dark-mode')
    document.querySelectorAll('.nav-logo').forEach(e => {
      e.classList.toggle('dark-mode')
    })
    document.querySelectorAll('.home').forEach(e => {
      e.classList.toggle('dark-mode')
    })
    document.querySelectorAll('.team').forEach(e => {
      e.classList.toggle('dark-mode')
    })
    document.querySelectorAll('.event').forEach(e => {
      e.classList.toggle('dark-mode')
    })
    document.querySelectorAll('.video').forEach(e => {
      e.classList.toggle('dark-mode')
    })
    document.querySelectorAll('.project').forEach(e => {
      e.classList.toggle('dark-mode')
    })
  }

  render() {
    return (
      <AppBar position="fixed" color="inherit" className="dsc-nav">
        <Toolbar>
          <Container>
            <Row>
              {/*<Hidden lgUp implementation="css" className="my-auto">*/}
                <Col xs="1" className='my-auto mr-1'>
                  <DSCDrawer isDarkMode={this.state.isDarkMode} handleThemeSwitch={this.handleThemeSwitch}/>
                </Col>
              {/*</Hidden>*/}
              <Col lg="1" md="1" sm="1" xs="2" className="dsc-brand my-auto p-xl-3 p-lg-3 p-md-2 p-sm-1 p-xs-0">
                <Link to="/">
                  <Image src={gdgLogo} style={{width: '100%'}} className='nav-logo'/>
                </Link>
              </Col>
              <Col lg="3" md="6" sm="6" xs="6" className="my-auto dsc-brand p-0">
                <Link
                  to="/"
                  style={{
                    fontSize: 18,
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}
                >
                  DSC MESCOE
                </Link>
              </Col>
            </Row>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
