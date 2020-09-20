import {Toolbar, Button, CardActionArea, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import React from 'react';
import {resetNavStyle} from "../utils/utils";
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';

import projects from '../data/projects';

import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = 'Projects - DSC MESCOE';
		resetNavStyle({page: 'Projects'})
	}
	render() {
		return (
			<Toolbar className="p-0">
				<Container>
					<Row className="mt-5">
						<Col>
							<h3 style={{color: '#34A852'}}>Projects</h3>
						</Col>
						<Col>
						<Button variant="contained" href='#' size='large' className="float-right" style={{
							backgroundColor: '#34A852',
							color: '#ffffff',
							textTransform: "capitalize",
							borderRadius: 5,
							}}>Submit an Idea</Button>
						</Col>
					</Row>

					<Row className="ml-3">
						{projects.map((projects, index) => <Col xs="12" key={index} className="p-0 pr-4 mt-5" md="6" lg="4">
							<Card style={{
								boxShadow: `-10px -10px #34A852`,
								borderRadius: 10,
								border: `2px solid #34A852`
								}}>
								<CardActionArea>
									<ResponsiveEmbed aspectRatio="16by9">
										<CardMedia image={projects.image} component="img" title="Event Image"/>
									</ResponsiveEmbed>
									<CardContent>
										<p className='p-0 m-0' style={{ fontSize: 16, fontWeight: "normal", }}>
											<b>{projects.title}</b><br />
											<b>Description: </b>{projects.desc}<br />
											<b>Authors: </b>{projects.authors}<br />
										</p>
									</CardContent>
								</CardActionArea>
								<CardActions>
									{projects.github ? <Button href={projects.github} target="_blank" style={{color: '#000000'}}>
										<GitHubIcon />
									</Button> : null}
									{projects.youtube ? <Button href={projects.youtube} target="_blank" style={{color: '#ff0000'}}>
										<YouTubeIcon />
									</Button> : null}
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
