import React from 'react';
import {Hidden, Toolbar} from '@material-ui/core';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import DSCNavBar from './components/navigation/DSCNavBar';
import ROUTES, {RouteType} from './routes';
import Footer from './components/navigation/Footer';

export default class App extends React.Component {
  getRoutes(routes) {
    return routes.filter(r => r.type === RouteType.PAGE || r.type === RouteType.FOOTER).map(
      (prop, key) =>
        prop.path === '/' ? (
          <Route exact path={prop.path} key={key} component={prop.component}/>
        ) : (
          <Route path={prop.path} key={key} component={prop.component}/>
        )
    );
  }

  render() {
    return (
      <Router>
        <DSCNavBar/>
        <Toolbar/>
        <Switch>{this.getRoutes(ROUTES)}</Switch>
        <Hidden xsDown>
          <Footer/>
        </Hidden>
      </Router>
    );
  }
}
