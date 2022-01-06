import React from 'react';
import { Hidden, Toolbar } from '@material-ui/core';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import DSCNavBar from './components/navigation/DSCNavBar';
import ROUTES, { RouteType } from './routes';
import Footer from './components/navigation/Footer';
import Team2020 from './views/Team2020';
import {Button} from 'react-bootstrap';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    if (localStorage.getItem('isDarkMode') === null) {
      localStorage.setItem('isDarkMode', JSON.stringify(false));
      //dark mode
    }
  }

  handleScroll() {
    const footer = document.querySelector('#contact');
    if (footer) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (footer.classList.contains('fade-out-animation'))
          footer.classList.replace('fade-out-animation', 'fade-in-animation');
        else footer.classList.add('fade-in-animation');
      } else {
        if (footer.classList.contains('fade-in-animation'))
          footer.classList.replace('fade-in-animation', 'fade-out-animation');
        else footer.classList.add('fade-out-animation');
      }
    }
  }

  getRoutes(routes) {
    return routes
      .filter((r) => r.type === RouteType.PAGE || r.type === RouteType.FOOTER)
      .map((prop, key) =>
        prop.path === '/' ? (
            <Route exact path={prop.path} key={key}>
              {prop.component}
			</Route>
		  ) : (	  
          <Route  exact path={prop.path} key={key}>
							  {prop.component}
						  </Route>
						 
					 
        )
      );
  }

  render() {
    return (
      <Router basename='/'>
        <DSCNavBar />
        <Toolbar />
        <Switch>
          {this.getRoutes(ROUTES)}
        </Switch>

        <Hidden xsDown>
          <Footer />
        </Hidden>
      </Router>
    );
  }
}
