import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {resetFooterStyle, resetNavStyle} from "../utils/utils";
import axios from 'axios'
import VideoCard from "../components/video/VideoCard";

// import videos from '../data/videos';

export default class Videos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		}
	}

	componentDidMount() {
		document.title = 'Videos - DSC MESCOE';
		resetNavStyle({page: 'Videos'});
		axios.get(`http://localhost:5000/api/videos/`)
			.then(res => {
				this.setState({videos: res.data });
				})
			.catch(err => console.error(err.message));
	}

	render() {
		const footer = document.querySelector('#contact');
		if (footer) {
			resetFooterStyle()
		}
		return (
			<Toolbar className="grid">
				<Container>
					<h3 className="mt-5 no-dark" style={{color: '#EA4435'}}>Videos</h3>
					<Row className="ml-3">
						{this.state.videos.map((video, index) => <Col xs="12" key={index} className="p-0 pr-4 mt-5" md="6" lg="4">
							<VideoCard video={video} />
						</Col>)}
					</Row>
					<Row className='mb-5 '/>
					<Row className='mb-5 '/>
				</Container>
			</Toolbar>
		);
	}
}
