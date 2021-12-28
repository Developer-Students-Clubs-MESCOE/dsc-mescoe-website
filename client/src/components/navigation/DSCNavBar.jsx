import React, {Component} from 'react';
import {AppBar, Toolbar, Hidden} from '@material-ui/core';
import gdgLogo from '../../assets/img/gdg_logo.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DSCDrawer from "./DSCDrawer";
import ROUTES, {RouteType} from "../../routes";
import DarkModeToggler from "../DarkModeToggler";
import darkbgimg from '../../assets/img/darkmodebg.svg';
import bgimg from '../../assets/img/trialNoGridFinal.svg';
import gdg_black from "../../assets/img/gdg_black.png";

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
      document.querySelectorAll(".logo-switch").forEach((e)=>{
        e.src=gdg_black;
      });
      document.querySelector(":root").style.setProperty('--card',`#242424`);
      document.querySelector(":root").style.setProperty('--transparent',`rgba(18,18,18,0.8)`);
      document.querySelector(":root").style.setProperty('--white',`#121212`);
      document.querySelector(":root").style.setProperty('--black',`#ffffff`);
      document.querySelector(":root").style.setProperty('--bg-img',`url("${darkbgimg}")`);
    }else{
      document.querySelectorAll(".logo-switch").forEach((e)=>{
        e.src=gdgLogo;
      });
    }
  }

  handleThemeSwitch() {
    this.setState({isDarkMode: !this.state.isDarkMode})
    localStorage.setItem('isDarkMode', JSON.stringify(!JSON.parse(localStorage.getItem('isDarkMode'))))
    if(!this.state.isDarkMode){
      document.querySelectorAll(".logo-switch").forEach((e)=>{
        e.src=gdg_black;

      });
      document.querySelector(":root").style.setProperty('--card',`#242424`);
      document.querySelector(":root").style.setProperty('--transparent',`rgba(18,18,18,0.8)`);
      document.querySelector(":root").style.setProperty('--white',`#121212`);
      document.querySelector(":root").style.setProperty('--black',`#ffffff`);
      document.querySelector(":root").style.setProperty('--bg-img',`url("${darkbgimg}")`);
    }else{
      document.querySelectorAll(".logo-switch").forEach((e)=>{
        e.src=gdgLogo;
      });
      document.querySelector(":root").style.setProperty('--card',`#ffffff`);
      document.querySelector(":root").style.setProperty('--transparent',`transparent`);
      document.querySelector(":root").style.setProperty('--white',`#ffffff`);
      document.querySelector(":root").style.setProperty('--black',`#121212`);
      document.querySelector(":root").style.setProperty('--bg-img',`url("${bgimg}")`);
    }
  }

  render() {
    return (
      <AppBar position="fixed" color="inherit"  className="dsc-nav">
        <Toolbar className="dsc-nav">
          <Container >
            <Row>
              <Hidden lgUp implementation="css" className="my-auto">
                <Col xs="1" className='my-auto mr-1'>
                  <DSCDrawer isDarkMode={this.state.isDarkMode} handleThemeSwitch={this.handleThemeSwitch}/>
                </Col>
              </Hidden>
              <Col lg="1" md="1" sm="1" xs="2" className="dsc-brand my-auto p-xl-3 p-lg-3 p-md-2 p-sm-1 p-xs-0">
                <Link to="/">
                  <Image  src={gdgLogo} style={{width: '100%'}} className='nav-logo logo-switch'/>
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
                  GDSC MESCOE
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
                      <DarkModeToggler isDarkMode={this.state.isDarkMode} handleThemeSwitch={this.handleThemeSwitch} color='var(--black)'/>
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
