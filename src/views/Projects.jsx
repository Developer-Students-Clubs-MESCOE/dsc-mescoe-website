import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = 'Projects - DSC MESCOE';
	}
	render() {
		return (
			<Toolbar style={{ marginLeft: 100, marginRight: 100 }} className="p-0">
				<Container fluid style={{ height: 1000 }}>
					<h3 className="mt-5">Projects</h3>
				</Container>
			</Toolbar>
		);
	}
}