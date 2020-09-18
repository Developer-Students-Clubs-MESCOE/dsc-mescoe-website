import { Toolbar } from '@material-ui/core';
import React from 'react';
import {resetNavStyle} from "../utils/utils";
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/img/sample.jpg';

const projects = [
	{
		img: logo,
		github: 'https://www.facebook.com/dscmescoepune/',
		youtube: '',
		name: 'Great Name',
		desc: 'This is a description aimed at nothing. This description is written in pure absence of context. Anyone getting offended by it is defeating the purpose of its authors.',
		authors: 'Generic Author, More Liable Author'
	},
	{
		img: logo,
		github: 'https://github.com/Developer-Students-Clubs-MESCOE',
		youtube: '',
		name: '',
		desc: '',
		authors: ''
	},
	{
		img: logo,
		github: 'https://www.instagram.com/mescoedsc/',
		youtube: '',
		name: '',
		desc: '',
		authors: ''
	},
	{
		img: logo,
		github: 'https://www.linkedin.com/company/dscmescoe/',
		youtube: '',
		name: '',
		desc: '',
		authors: ''
	},
	{
		img: logo,
		github: 'https://twitter.com/dscmescoe',
		youtube: '',
		name: '',
		desc: '',
		authors: ''
	},
	{
		img: logo,
		github: 'https://twitter.com/dscmescoe',
		youtube: '',
		name: '',
		desc: '',
		authors: ''
	}
];

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = 'Projects - DSC MESCOE';
		resetNavStyle({page: 'Projects'})
	}
	render() {
		return (
			<Toolbar style={{ marginLeft: 100, marginRight: 100 }} className="p-0">
				<Container fluid className="mb-4">
					<Row className="mt-5">
						<Col>
							<h3 >Projects</h3>
						</Col>
						<Col>
							<Button variant="success" className="float-right">Submit an Idea</Button>
						</Col>
					</Row>

					<Row className="mt-4" xs={1} md={2} lg={3}>
						{projects.map((projects, key) => (
							<Col key={key}>
								<div className="project-card">
									<div className="project-card-img">
										<img src={projects.img} alt="" />
									</div>
									<div className="project-card-body mt-2 p-2">
										<b>Project Name: </b>{projects.name}
										<p><b>Description: </b>{projects.desc}<br />
										<b>Authors: </b>{projects.authors}</p>
										<div className="project-card-link">
											<a href={projects.github} target="_blank" className="ml-2 gh-icon"><i className="fa fa-github" aria-hidden="true"></i></a>
											<a href={projects.youtube} target="_blank" className="ml-3 yt-icon"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</Col>
						))}
					</Row>
					
				</Container>
			</Toolbar>
		);
	}
}
