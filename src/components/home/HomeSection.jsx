import React, {Component} from 'react';
import {Col, Image, ResponsiveEmbed, Row} from "react-bootstrap";
import {Button, CardActionArea, Card, CardMedia, CardContent, CardActions, Hidden} from '@material-ui/core';
import ReactPlayer from "react-player";
import Paper from "@material-ui/core/Paper";

class HomeSection extends Component {
  render() {
    const data = this.props.data;
    return (
      <React.Fragment>
        <Col xs="12" md={data.image ? "6" : null} lg={data.image ? "6" : null} className='p-0 my-auto'
             id={data.id ? data.id : ""}>
          <Row className="ml-3">
            <h3 style={{color: data.button.backgroundColor}} className='inverted'>{data.title}</h3>
          </Row>
          <Row className="ml-3">
            {data.content.map((text, key) => <Col key={key} xs="11" className="p-0 mt-2">
              <p
                className='p-0 m-0'
                style={{
                  fontSize: 18,
                  fontWeight: "normal",
                }}
              >{text}</p>
            </Col>)}
          </Row>
          {data.videos ?
            <Row className="ml-3">
              {data.videos.map((video, index) => <Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
                <ResponsiveEmbed
                  className='inverted'
                  style={{
                    borderRadius: 30,
                    boxShadow: `-10px -10px ${data.button.backgroundColor}`,
                    border: `2px solid ${data.button.backgroundColor}`
                  }}>
                    <ReactPlayer url={video}/>
                </ResponsiveEmbed>
              </Col>)}
            </Row>
            : null}
          {data.cards ?
            <Row className="ml-3">
              {data.cards.map((card, index) => <Col xs="12" key={index} className="p-0 pr-4 mt-5" md="6" lg="4">
                <Card style={{
                  boxShadow: `-10px -10px ${data.button.backgroundColor}`,
                  borderRadius: 10,
                  border: `2px solid ${data.button.backgroundColor}`
                }} className='inverted'>
                  <CardActionArea>
                    <ResponsiveEmbed aspectRatio="16by9">
                      <CardMedia image={card.image} component="img" title="Event Image"/>
                    </ResponsiveEmbed>
                    <CardContent>
                      {card.content.map((text, key) => <p
                        key={key}
                        className='p-0 m-0'
                        style={{
                          fontSize: 16,
                          fontWeight: "normal",
                        }}
                      >{text}</p>)}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button style={{color: data.button.backgroundColor}}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Col>)}
            </Row>
            : null}
          <Row className='mt-5 ml-3'>
            <Button variant="contained" className='inverted' href={data.button.href} size='large' style={{
              backgroundColor: data.button.backgroundColor,
              color: data.button.textColor,
              textTransform: "capitalize",
              borderRadius: 5,
            }}>{data.button.text}</Button>
          </Row>
        </Col>
        <Hidden xsDown>
          {data.image ? <Col md="6" lg="6" className='my-auto'>
            <Paper className='inverted' elevation={3} style={{borderRadius: 10}} variant="outlined">
              <Image src={data.image} width="100%" style={{borderRadius: 10}}/>
            </Paper>
          </Col> : null}
        </Hidden>
      </React.Fragment>
    );
  }
}

export default HomeSection;