import {Toolbar} from '@material-ui/core';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {resetFooterStyle, resetNavStyle, serverURL} from "../utils/utils";
// import eventSections from '../data/eventSections';
import EventCard from '../components/event/EventCard';
import Axios from "axios";
import darkbgimg from '../assets/img/darkmodebg.svg';
import bgimg from '../assets/img/trialNoGridFinal.svg';

export default class Events extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			eventSections: {upcoming: [], recent: []}
		}
		if (JSON.parse(localStorage.getItem('isDarkMode'))) {
			document.querySelector(":root").style.setProperty('--transparent',`rgba(18,18,18,0.8)`);
			document.querySelector(":root").style.setProperty('--white',`#121212`);
			document.querySelector(":root").style.setProperty('--black',`#ffffff`);
			document.querySelector(":root").style.setProperty('--bg-img',`url("${darkbgimg}")`);
		  }
	}
	

	componentDidMount() {
		document.title = 'Events - GDSC MESCOE';
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
				//dark mode
				document.querySelector(":root").style.setProperty('--card',`#242424`);	
				document.querySelector(":root").style.setProperty('--transparent',`rgba(18,18,18,0.8)`);
      document.querySelector(":root").style.setProperty('--white',`#121212`);
      document.querySelector(":root").style.setProperty('--black',`#ffffff`);
      document.querySelector(":root").style.setProperty('--bg-img',`url("${darkbgimg}")`);
			}
		});
	}

	render() {
		const footer = document.querySelector('#contact');
		if (footer) {
			resetFooterStyle()
		}
		return (
			<Toolbar className='grid' style={{padding:"2em"}}>
				<Container>
					<h3 style={{color: '#FBBD04', fontWeight: 600}} className='mt-5 event'>Upcoming Events</h3>
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
					<h3 style={{color: '#34A852', fontWeight: 600}} className='mt-5 event'>Recently Held Events</h3>
					<Row className='ml-3'>
						{this.state.eventSections.recent.length ?
							this.state.eventSections.recent.reverse().map((eventSection, key) =>
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