import {Toolbar} from '@material-ui/core';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {resetFooterStyle, resetNavStyle, serverURL} from "../utils/utils";
// import eventSections from '../data/eventSections';
import EventCard from '../components/event/EventCard';
import Axios from "axios";

export default class Events extends React.Component {

	state = {
		eventSections: {upcoming: [], recent: []}
	}

	componentDidMount() {
		document.title = 'Events - DSC MESCOE';
		resetNavStyle({page: 'Events'})

		Axios.get(`${serverURL}/api/events`).then(result => {
			let events = this.state.eventSections;
			const allEvents = result.data;
			const upcomingEvents = allEvents.filter(event => event.upcoming);
			const recentEvents = allEvents.filter(event => !event.upcoming);
			events["upcoming"] = upcomingEvents
			events["recent"] = recentEvents
			this.setState({eventSections: events})
			if (JSON.parse(localStorage.getItem('isDarkMode'))) {
				document.querySelectorAll('.event').forEach(e => {
					e.classList.toggle('dark-mode')
				})
			}
		});
	}

	render() {
		const footer = document.querySelector('#contact');
		if (footer) {
			resetFooterStyle()
		}
		return (
			<Toolbar className='grid'>
				<Container>
					<h3 style={{color: '#FBBD04'}} className='mt-5 event'>Upcoming Events</h3>
					<Row className='ml-3'>
						{this.state.eventSections.upcoming.length ?
							this.state.eventSections.upcoming.map((eventSection, key) =>
								<Col xs="12"
										 key={key}
										 className='p-0 pr-4 mt-5 event'
										 md="6" lg="4">
									<EventCard key={key} data={eventSection} color='#FBBD04'/>
								</Col>
							)
							: <Col xs="12" className='p-0 mt-3'>
								<h5>There are no upcoming events at the moment. Please check again soon.</h5>
							</Col>}
					</Row>
					<h3 style={{color: '#34A852'}} className='mt-5 event'>Recently Held Events</h3>
					<Row className='ml-3'>
						{this.state.eventSections.recent.length ?
							this.state.eventSections.recent.map((eventSection, key) =>
								<Col xs="12"
										 key={key}
										 className='p-0 pr-4 mt-5 event'
										 md="6" lg="4">
									<EventCard key={key} data={eventSection} color='#34A852'/>
								</Col>
							)
							: <Col xs="12" className='p-0 mt-3'><h5>There are no recent events at the moment. Please check again
								soon.</h5></Col>}
					</Row>
					<Row className="mt-5"/>
				</Container>
			</Toolbar>
		);
	}
}
