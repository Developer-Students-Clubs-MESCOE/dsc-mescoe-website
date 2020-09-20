import { CardActionArea, Select, TextField, Toolbar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {resetNavStyle} from "../utils/utils";
import eventSections from '../data/eventSections';
import EventSection from '../components/event/EventSection';

export default class Events extends React.Component {

	componentDidMount() {
		document.title = 'Events - DSC MESCOE';
		resetNavStyle({page: 'Events'})
	}

	render() {
		return (
			<Toolbar>
				<Container className="mt-5">
					<Row className="justify-content-center">
						<Col xs={-4} style={{ marginTop: 20 }}>
							<SearchOutlined />
						</Col>
						<Col xs={8}>  
							<TextField
								id="standard-textarea"
								label="Search"
								placeholder="Flutter For Beginner"
								multiline
								fullWidth
							/>
						</Col>
					</Row>

					{eventSections.map((homeSection, key) => <Row key={key} className='mt-5'>
						<EventSection index={key} key={key} data={homeSection}/>
					</Row>)}
			</Container>
			</Toolbar>
		);
	}
}
