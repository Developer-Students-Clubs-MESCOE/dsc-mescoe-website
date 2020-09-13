import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import { Toolbar } from '@material-ui/core';
import { ReactComponent as Facebook } from '../../assets/img/facebook.svg';
import { ReactComponent as GitHub } from '../../assets/img/github.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/img/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/img/twitter.svg';

const socials = [
	{
		icon: <Facebook className="m-4" fill="white" stroke="white" />,
		link: 'https://www.facebook.com/dscmescoepune/'
	},
	{
		icon: <GitHub className="m-4" fill="white" stroke="white" />,
		link: 'https://github.com/Developer-Students-Clubs-MESCOE'
	},
	{
		icon: <Instagram className="m-4" fill="white" stroke="white" />,
		link: 'https://www.instagram.com/mescoedsc/'
	},
	{
		icon: <LinkedIn className="m-4" fill="white" stroke="white" />,
		link: 'https://www.linkedin.com/company/dscmescoe/'
	},
	{
		icon: <Twitter className="m-4" fill="white" stroke="white" />,
		link: 'https://twitter.com/dscmescoe'
	}
];

export default class Footer extends Component {
	render() {
		return (
			<Container fluid style={{ backgroundColor: '#242424', height: '4.5em' }} className="p-0">
				<Toolbar style={{ marginLeft: 100, marginRight: 100 }}>
					<Container fluid className="p-0">
						<Row className="mx-n4">
							<Col xs="1" className="my-auto">
								<p style={{ fontSize: 20, margin: 0, padding: 0 }} className="text-white mr-5">
									Socials
								</p>
							</Col>
							{socials.map((social, key) => (
								<Col xs="1" key={key} className="my-auto">
									<a href={social.link} target="blank">
										{social.icon}
									</a>
								</Col>
							))}
							<Col xs="6" className="my-auto px-0">
								<Container fluid>
									<Row className="justify-content-end">
										<p className="p-0 m-0 text-white">Modern Education Society's College of Engineering, Pune</p>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
				</Toolbar>
			</Container>
		);
	}
}
