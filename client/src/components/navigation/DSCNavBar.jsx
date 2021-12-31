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
import gdg_blackleft from "../../assets/img/gdg_blackleft.png";
import gdg_blackright from "../../assets/img/gdg_blackright.png";
import gdgLogoleft from '../../assets/img/gdg_logoleft.png';
import gdgLogoright from '../../assets/img/gdg_logoright.png';
import newYearImage from '../../assets/img/Happy-New-Year.svg';
import Confetti from 'react-confetti';

const linkRoutes = ROUTES.filter(route => route.type === RouteType.LINK && route.icon !== null)
const pageRoutes = ROUTES.filter(route => route.type === RouteType.PAGE && route.icon !== null)

export default class DSCNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
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
    if(this.state.open){
      this.setState({open:false})
    }
    localStorage.setItem('isDarkMode', JSON.stringify(!JSON.parse(localStorage.getItem('isDarkMode'))))
    if(!this.state.isDarkMode){
      document.querySelectorAll(".logo-switch").forEach((e)=>{
        e.src=gdg_black;
        
      });
      document.querySelector(".darkModeAnimation").style.display="flex";
      //change logo as per dark theme
      setTimeout(()=>{
        document.querySelector(".large-logoleft").src=gdg_blackleft;
        document.querySelector(".large-logoright").src=gdg_blackright;
        for(let i=1;i<=100;i++){
          setTimeout(()=>{
            document.querySelector('.large-logoleft').style.left=`-${i/4}vw`;
          },i*5)
        }
        for(let i=1;i<=100;i++){
          setTimeout(()=>{
            document.querySelector('.large-logoright').style.right=`-${i/4}vw`;
          },i*5)
        }

        setTimeout(()=>{
          document.querySelector('.large-logoleft').style.left=`0vw`;
          document.querySelector('.large-logoright').style.right=`0vw`;
          document.querySelector(".darkModeText").style.display="flex"},500)
      },1000);
      //changing css variables bvalues as per dark theme
      setTimeout(()=>{
      document.querySelector(":root").style.setProperty('--card',`#242424`);
      document.querySelector(":root").style.setProperty('--transparent',`rgba(18,18,18,0.8)`);
      document.querySelector(":root").style.setProperty('--white',`#121212`);
      document.querySelector(":root").style.setProperty('--black',`#ffffff`);
      document.querySelector(":root").style.setProperty('--bg-img',`url("${darkbgimg}")`);
        },1000)
        // after animation bringing back to the original images state
        setTimeout(()=>{
          document.querySelector(".darkModeAnimation").style.display="none";
        document.querySelector(".large-logoleft").src=gdgLogoleft;
        document.querySelector(".large-logoright").src=gdgLogoright;
        document.querySelector('.large-logoleft').style.left=`0vw`;
          document.querySelector('.large-logoright').style.right=`0vw`;
        document.querySelector(".darkModeText").style.display="none";
        
      },5000)
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
      <>
        <div className=''></div>
        <AppBar
          position='fixed'
          color='inherit'
          style={{ zIndex: '7' }}
          className='dsc-nav'>
          <Toolbar className='dsc-nav'>
            <Container>
              <Row>
                <Hidden lgUp implementation='css' className='my-auto'>
                  <Col xs='1' className='my-auto mr-1'>
                    <DSCDrawer
                      isDarkMode={this.state.isDarkMode}
                      handleThemeSwitch={this.handleThemeSwitch}
                    />
                  </Col>
                </Hidden>
                <Col
                  lg='1'
                  md='1'
                  sm='1'
                  xs='2'
                  className='dsc-brand my-auto p-xl-3 p-lg-3 p-md-2 p-sm-1 p-xs-0'>
                  <Link to='/'>
                    <Image
                      src={gdgLogo}
                      style={{ width: '100%' }}
                      className='nav-logo logo-switch'
                    />
                  </Link>
                </Col>
                <Col
                  lg='3'
                  md='6'
                  sm='6'
                  xs='6'
                  className='my-auto dsc-brand p-0'>
                  <Link
                    to='/'
                    style={{
                      fontSize: 18,
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}>
                    GDSC MESCOE
                  </Link>
                </Col>
                <Col lg='8' className='my-auto'>
                  <Hidden mdDown implementation='css'>
                    <Container fluid>
                      <Row className='justify-content-between'>
                        {pageRoutes.map((route, index) => (
                          <Link
                            key={index}
                            style={{
                              fontSize: 16,
                              margin: 0,
                              padding: 0,
                              color: 'inherit',
                              textDecoration: 'inherit'
                            }}
                            to={route.path}>
                            {route.name}
                          </Link>
                        ))}
                        {linkRoutes.map((route, index) => (
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
                            target='blank'>
                            {route.name}
                          </a>
                        ))}
                        <DarkModeToggler
                          isDarkMode={this.state.isDarkMode}
                          handleThemeSwitch={this.handleThemeSwitch}
                          color='var(--black)'
                        />
                      </Row>
                    </Container>
                  </Hidden>
                </Col>
              </Row>
            </Container>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
