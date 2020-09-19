import { CardActionArea, Select, TextField, Toolbar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Events extends React.Component {

	componentDidMount() {
		document.title = 'Events - DSC MESCOE';
		resetNavStyle({page: 'Events'})
	}

	render() {
		return (
			<Toolbar style={{ marginLeft: 100, marginRight: 100 }} className="p-0">
				<Container fluid style={{ height: 1000, marginTop: 50 }}>
					<Row className="justify-content-md-center">
						<Col xs={-4} style={{ marginTop: 20 }}>
							<SearchOutlined />
						</Col>
						<Col xs={8}>  
							<TextField
								id="standard-textarea"
								label="Serach"
								placeholder="Flutter For Beginner"
								multiline
								fullWidth
							/>
						</Col>
						<Col xs={2} style={{ marginTop: 16 }}>
						<Select
							native
							value={0}
							label="Serach by.."
						>
							<option aria-label="None" value="" />
							<option value={0}>By Title</option>
							<option value={1}>By Date</option>
							<option value={2}>By Location</option>
						</Select>
						</Col>
					</Row>

					<Row style={{ marginTop: 30 }}>
						<Col>
							<h3> Upcoming </h3>
						</Col>
						{/* <Row className="ml-3">
							{data.cards.map((card, index) => <Col xs="12" key={index} className="p-0 pr-4 mt=5" md="6" lg="4"> 
								<Card  style={{
									boxShodow: `-10px -10px ${data.button.backgroundColor}`,
									borderRadus: 10,
									border: `2px solid ${data.button.backgroundColor}`
								}}>
									<CardActionArea>
										<CardMedia image={card.image} Component="img" title="Event Image" />
										<CardContent>
											{card.content.map((text, key) => <p
												key={key}
												className="'p-0 m-0"
												style={{
													fontSize: 16,
													fontWeight: 'normal'
												}}>
													{text}
												</p>)}
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button style={{ color: data.button.backgroundColor }}>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Col>)}
						</Row> */}
					</Row>
			</Container>
			</Toolbar>
		);
	}
}
