import {Toolbar} from '@material-ui/core';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {resetFooterStyle, resetNavStyle, serverURL} from "../utils/utils";
import axios from 'axios'
import VideoCard from "../components/video/VideoCard";
import {Skeleton} from "@material-ui/lab";
import darkbgimg from '../assets/img/darkmodebg.svg';
import bgimg from '../assets/img/trialNoGridFinal.svg';
import gdgLogo from "../assets/img/gdg_logo.png";
import gdg_black from "../assets/img/gdg_black.png";

export default class Videos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		}
		
	}

	componentDidMount() {
		document.title = 'Videos - GDSC MESCOE';
		resetNavStyle({page: 'Videos'});

		axios.get(`${serverURL}/api/videos`)
			.then(res => {
				this.setState({videos: res.data});
				
			})
			.catch(err => console.error(err.message));
	}

	render() {
		const footer = document.querySelector('#contact');
		if (footer) {
			resetFooterStyle()
		}
		return (
			<Toolbar className="grid" style={{minHeight:"100vh"}}>
				<Container>
					<h3 className="mt-5 video" style={{color: '#EA4435', fontWeight: 600}}>Videos</h3>
					<Row className="ml-3">
						{this.state.videos.length ? this.state.videos.map((video, index) => <Col xs="12" key={index}
																																										 className="p-0 pr-4 mt-5 video"
																																										 md="6" lg="4">
							<VideoCard video={video}/>
						</Col>) : [0, 1, 2].map((s, index) =>
							<Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
								<Skeleton variant='rect' height={300} style={{borderRadius: 10}}/>
							</Col>
						)}
					</Row>
					<Row className='mb-5'/>
					<Row className='mb-5 '/>
				</Container>
			</Toolbar>
		);
	}
}
