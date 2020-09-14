import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';

export default class Events extends React.Component {
	componentDidMount() {
		document.title = 'Events - DSC MESCOE';
	}
	render() {
		return (
			<Toolbar style={{ marginLeft: 100, marginRight: 100 }} className="p-0">
				<Container fluid style={{ height: 1000 }}>
					<h3 className="mt-5">Events</h3>
				</Container>
			</Toolbar>
		);
	}
}
