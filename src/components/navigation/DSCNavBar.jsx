import React, {Component} from 'react';
import {AppBar, Hidden, Toolbar} from '@material-ui/core';
import gdgLogo from '../../assets/img/gdg_logo.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ROUTES, {RouteType} from '../../routes';
import {Link} from 'react-router-dom';
import DSCDrawer from "./DSCDrawer";

export default class DSCNavBar extends Component {
  render() {
    const linkRoutes = ROUTES.filter(route => route.type === RouteType.LINK)
    const footerRoutes = ROUTES.filter(route => route.type === RouteType.FOOTER)
    const pageRoutes = ROUTES.filter(route => route.type === RouteType.PAGE)
    return (
      <AppBar position="fixed" color="inherit" className="dsc-nav">
        <Toolbar>
          <Container>
            <Row>
              <Hidden lgUp implementation="css" className="my-auto">
                <Col xs="1">
                  <DSCDrawer/>
                </Col>
              </Hidden>
              <Col lg="1" md="1" sm="1" xs="2" className="dsc-brand my-auto p-xl-3 p-lg-3 p-md-2 p-sm-1 p-xs-0">
                <Link to="/">
                  <Image src={gdgLogo} style={{width: '100%'}}/>
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
                </Hidden>
              </Col>
            </Row>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
