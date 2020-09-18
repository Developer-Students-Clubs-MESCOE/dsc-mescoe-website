import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import {resetNavStyle} from "../utils/utils";

export default class Team extends React.Component {
	componentDidMount() {
		document.title = 'Team - DSC MESCOE';
		resetNavStyle({page: 'Team'})
	}

	render() {
		return (
			<Toolbar>
				<Container style={{ height: 1000 }}>
					<h3 className="mt-5">Team</h3>
				</Container>
			</Toolbar>
		);
	}
}
