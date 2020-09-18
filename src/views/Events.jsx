import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import {resetNavStyle} from "../utils/utils";

export default class Events extends React.Component {
	componentDidMount() {
		document.title = 'Events - DSC MESCOE';
		resetNavStyle({page: 'Events'})
	}
	render() {
		return (
			<Toolbar>
				<Container style={{ height: 1000 }}>
					<h3 className="mt-5">Events</h3>
				</Container>
			</Toolbar>
		);
	}
}
