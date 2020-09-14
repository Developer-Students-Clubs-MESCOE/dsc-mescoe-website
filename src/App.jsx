import React from 'react';
import { Toolbar } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DSCAppBar from './components/navigation/DSCAppBar';
import ROUTES from './routes';
import Footer from './components/navigation/Footer';

export default class App extends React.Component {
	getRoutes(routes) {
		return routes.map(
			(prop, key) =>
				prop.path === '/' ? (
					<Route exact path={prop.path} key={key} component={prop.component} />
				) : (
					<Route path={prop.path} key={key} component={prop.component} />
				)
		);
	}
	render() {
		return (
			<Router>
				<DSCAppBar />
				<Toolbar />
				<Switch>{this.getRoutes(ROUTES)}</Switch>
				<Footer />
			</Router>
		);
	}
}
