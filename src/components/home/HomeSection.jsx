import React, {Component} from 'react';
import {Col, Image, ResponsiveEmbed, Row} from "react-bootstrap";
import {Button, CardActionArea, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import ReactPlayer from "react-player";
import Paper from "@material-ui/core/Paper";

class HomeSection extends Component {

  render() {
    const data = this.props.data;
    return (
      <React.Fragment>
        <Col className='p-0 my-auto' id={data.id ? data.id : ""}>
          <Row>
            <h3 style={{color: data.button.backgroundColor}}>{data.title}</h3>
          </Row>
          <Row>
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
            <Row className="mt-5">
              {data.videos.map((video, index) => <Col key={index} className="p-0 pr-4" xs="4">
                <ResponsiveEmbed
                  style={{
                    borderRadius: 30,
                    boxShadow: `-10px -10px ${data.button.backgroundColor}`,
                    border: `1px solid ${data.button.backgroundColor}`
                  }}>
                  <Col>
                    <ReactPlayer url={video}/>
                  </Col>
                </ResponsiveEmbed>
              </Col>)}
            </Row>
            : null}
          {data.cards ?
            <Row className="mt-5">
              {data.cards.map((card, index) => <Col key={index} className="p-0 pr-4" xs="4">
                <Card style={{
                  boxShadow: `-10px -10px ${data.button.backgroundColor}`,
                  borderRadius: 10,
                  border: `1px solid ${data.button.backgroundColor}`
                }}>
                  <CardActionArea>
                    <CardMedia image={card.image} component="img" title="Event Image"/>
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
          <Row className='mt-5'>
            <Button variant="contained" href={data.button.href} size='large' style={{
              backgroundColor: data.button.backgroundColor,
              color: data.button.textColor,
              textTransform: "capitalize",
              borderRadius: 5,
            }}>{data.button.text}</Button>
          </Row>
        </Col>
        {data.image ? <Col className='my-auto text-center'>
          <Paper elevation={3} style={{borderRadius: 10}} variant="outlined">
            <Image src={data.image} width="100%" style={{borderRadius: 10}}/>
          </Paper>
        </Col> : null}
      </React.Fragment>
    );
  }
}

export default HomeSection;