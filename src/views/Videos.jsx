import { Toolbar, Button, CardActionArea, Card, CardContent, CardActions } from '@material-ui/core';
import React from 'react';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import ReactPlayer from "react-player";
import {resetNavStyle} from "../utils/utils";
import Axios from 'axios'

// import videos from '../data/videos';

export default class Videos extends React.Component {
	constructor() {
		super();
		this.state = {
			videos: []
		}

	}

	componentDidMount() {
		document.title = 'Videos - DSC MESCOE';
		resetNavStyle({page: 'Videos'})
		Axios.get('http://localhost:5000/api/videos/').then(result => {
			this.setState({videos: result})
			console.log(result)
		}).catch(err => console.log(err))
		console.log(this.state.videos)
	}

	render() {
		return (
			<Toolbar className="p-0">
				<Container>
					<h3 className="mt-5" style={{color: '#EA4435'}}>Videos</h3>

					<Row className="ml-3">
						{this.state.videos.map((video, index) => <Col xs="12" key={index} className="p-0 pr-4 mt-5" md="6" lg="4">
							<Card style={{
								boxShadow: `-10px -10px #EA4435`,
								borderRadius: 10,
								border: `2px solid #EA4435`
								}}>
								<CardActionArea>
									<ResponsiveEmbed aspectRatio="16by9">
										<ReactPlayer height="100%" width="100%" url={video.url}/>
									</ResponsiveEmbed>
									<CardContent>
										<p className='p-0 m-0' style={{ fontSize: 16, fontWeight: "normal", }}>
											<b>{video.name}</b><br />
											<b>Description: </b>{video.description}<br />
										</p>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button style={{color: '#EA4435'}} target="_blank" href={video.url}>Watch Now</Button>
								</CardActions>
							</Card>
						</Col>)}
					</Row>
					<Row className='mb-5'/>
				</Container>
			</Toolbar>
		);
	}
}
