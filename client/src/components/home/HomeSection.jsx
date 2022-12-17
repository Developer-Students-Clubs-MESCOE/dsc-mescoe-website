import React, {Component} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {Button, Hidden} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import EventCard from "../event/EventCard";
import ProjectCard from "../project/ProjectCard";
import VideoCard from "../video/VideoCard";
import {Skeleton} from "@material-ui/lab";

class HomeSection extends Component {
	render() {
		const data = this.props.data;
		return (
			<React.Fragment>
				<Col xs="12" md={data.image ? "6" : null} lg={data.image ? "6" : null} className='p-0 my-auto'
						 id={data.id ? data.id : ""}>
					<Row className="ml-3">
						<h3 style={{color: data.button.backgroundColor, fontWeight: 600}}>{data.title}</h3>
					</Row>
					<Row className="ml-3">
						{data.content.map((text, key) => <Col key={key} xs="11" className="p-0 mt-2 home">
							<p
								className='p-0 m-0'
								style={{
									fontSize: 18,
									fontWeight: "normal",
								}}
							>{text}</p>
						</Col>)}
					</Row>
					{data.videos.length ?
						<Row className="ml-3">
							{data.videos.map((video, index) => <Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
								<VideoCard video={video}/>
							</Col>)}
						</Row>
						: this.props.index === 2 ? <Row className="ml-3">
							{[0, 1, 2].map((s, index) =>
								<Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
									<Skeleton variant='rect' height={300} style={{borderRadius: 10}} />
								</Col>
							)}
						</Row> : null}
					{data.cards.length ?
						<Row className="ml-3">
							{data.cards.map((card, index) => <Col xs="12" key={index} className="p-0 pr-4 mt-5" md="6" lg="4">
								{this.props.index === 1 ?
									<EventCard data={card} color='#FBBD04'/> : <ProjectCard project={card}/>}
							</Col>)}
						</Row>
						: (this.props.index === 1|| this.props.index === 3) ? <Row className="ml-3">
							{[0, 1, 2].map((s, index) =>
								<Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
									<Skeleton variant='rect' height={300} style={{borderRadius: 10}}/>
								</Col>
							)}
						</Row> : null}
					<Row className='mt-5 ml-3'>
						<Button variant="contained" href={data.button.href} size='large' style={{
							backgroundColor: data.button.backgroundColor,
							color: data.button.textColor,
							textTransform: "capitalize",
							borderRadius: 5,
						}}>{data.button.text}</Button>
					</Row>
				</Col>
				<Hidden xsDown>
					{data.image ? <Col md="6" lg="6" className='my-auto'>
						
							<Image src={data.image} width="100%" style={{borderRadius: 10}}/>
						
					</Col> : null}
				</Hidden>
			</React.Fragment>
		);
	}
}

export default HomeSection;