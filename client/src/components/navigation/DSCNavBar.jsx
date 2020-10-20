import React, {Component} from 'react';
import {AppBar, Toolbar, Hidden} from '@material-ui/core';
import gdgLogo from '../../assets/img/gdg_logo.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DSCDrawer from "./DSCDrawer";
import ROUTES, {RouteType} from "../../routes";
import DarkModeToggler from "../DarkModeToggler";

const linkRoutes = ROUTES.filter(route => route.type === RouteType.LINK && route.icon !== null)
const pageRoutes = ROUTES.filter(route => route.type === RouteType.PAGE && route.icon !== null)

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
    document.querySelectorAll('.gcp').forEach(e => {
      e.classList.toggle('dark-mode')
    })
  }

  render() {
    return (
      <AppBar position="fixed" color="inherit" className="dsc-nav">
        <Toolbar>
          <Container>
            <Row>
              <Hidden lgUp implementation="css" className="my-auto">
                <Col xs="1" className='my-auto mr-1'>
                  <DSCDrawer isDarkMode={this.state.isDarkMode} handleThemeSwitch={this.handleThemeSwitch}/>
                </Col>
              </Hidden>
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
              <Col lg="8" className="my-auto">
                <Hidden mdDown implementation="css">
                  <Container fluid>
                    <Row className="justify-content-between">
                      {pageRoutes.map(
                        (route, index) =>
                          <Link
                            key={index}
                            style={{
                              fontSize: 16,
                              margin: 0,
                              padding: 0,
                              color: 'inherit',
                              textDecoration: 'inherit'
                            }}
                            to={route.path}
                          >
                            {route.name}
                          </Link>
                      )}
                      {linkRoutes.map(
                        (route, index) =>
                          <a
                            key={index}
                            style={{
                              fontSize: 16,
                              margin: 0,
                              padding: 0,
                              color: 'inherit',
                              textDecoration: 'inherit'
                            }}
                            href={route.path}
                            target='blank'
                          >
                            {route.name}
                          </a>
                      )}
                      {/*<DarkModeToggler isDarkMode={this.state.isDarkMode} handleThemeSwitch={this.handleThemeSwitch} color='black'/>*/}
                    </Row>
                  </Container>
                </Hidden>
              </Col>
            </Row>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
