import React, {Component} from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import gdgLogo from '../../assets/img/gdg_logo.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ROUTES, {RouteType} from '../../routes';
import {Link} from 'react-router-dom';

export default class DSCNavBar extends Component {
  // 4 is default AppBar Elevation
  render() {
    const linkRoutes = ROUTES.filter(route => route.type === RouteType.LINK)
    const footerRoutes = ROUTES.filter(route => route.type === RouteType.FOOTER)
    const pageRoutes = ROUTES.filter(route => route.type === RouteType.PAGE)
    return (
      <AppBar position="fixed" color="inherit" className="dsc-nav">
        <Toolbar style={{marginLeft: 100, marginRight: 100}} className="p-0">
          <Container fluid className="p-0">
            <Row>
              <Col xs="1" className="p-4 dsc-brand">
                <Link to="/">
                  <Image src={gdgLogo} style={{width: '100%'}}/>
                </Link>
              </Col>
              <Col xs="2" className="my-auto p-0 dsc-brand">
                <Link
                  to="/"
                  style={{
                    fontSize: 20,
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}
                >
                  DSC MESCOE
                </Link>
              </Col>
              <Col xs="9" className="my-auto">
                <Container fluid>
                  <Row className="justify-content-end">
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
                          className="mr-5"
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
                          className="mr-5"
                          href={route.path}
                        >
                          {route.name}
                        </a>
                    )}
                    {footerRoutes.map(
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
                        >
                          {route.name}
                        </a>
                    )}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
