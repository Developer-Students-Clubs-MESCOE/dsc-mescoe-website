import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import {resetNavStyle} from "../utils/utils";

export default class Videos extends React.Component {
	componentDidMount() {
		document.title = 'Videos - DSC MESCOE';
		resetNavStyle({page: 'Videos'})
	}
	render() {
		return (
			<Toolbar style={{ marginLeft: 100, marginRight: 100 }} className="p-0">
				<Container fluid style={{ height: 1000 }}>
					<h3 className="mt-5">Videos</h3>
				</Container>
			</Toolbar>
		);
	}
}
