import React, {Component} from 'react';
import {Col, Image, ResponsiveEmbed, Row} from "react-bootstrap";
import {
  Button,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Hidden,
  Collapse,
  Fade,
  Backdrop,
  Modal
} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import {ComputerOutlined, LocationCityOutlined, WatchOutlined} from '@material-ui/icons'

class EventSection extends Component {
  state = {
    openUp: true,
    open: false,
    card: null,
    cardWidth: 700,
    cardHeight: 900,
  }

  componentDidMount() {
    console.log(window.innerWidth)
    if (this.props.index > 0) {
      if (window.innerWidth <= 576) {
        this.accordion.click();
      }
    }
    if (window.innerWidth <= 1024) {
      this.setState({cardWidth: window.innerWidth * 0.8, cardHeight: window.innerHeight * 0.8})
    }
  }

  toggleEventModal = () => {
    this.setState({open: !this.state.open})
  }

  clickEvent = (card) => {
    this.setState({card: card})
    this.toggleEventModal()
  }

  render() {
    const data = this.props.data;
    console.log(data)
    return (
      <React.Fragment>
        {this.state.card ?
          <Modal
            style={{
              top: (window.innerHeight * 0.2),
              margin: "auto",
              width: this.state.cardWidth,
              height: this.state.cardHeight,
              borderColor: `${data.upcoming ? '#FBBD04' : '#34A852'}`
            }}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={this.state.open}
            onClose={this.toggleEventModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            disableAutoFocus={true}
          >
            <Fade in={this.state.open}>
              <Card style={{
                boxShadow: `-10px -10px ${data.upcoming ? '#FBBD04' : '#34A852'}`,
                borderRadius: 10,
                border: `2px solid ${data.upcoming ? '#FBBD04' : '#34A852'}`
              }}>
                <CardActionArea>
                  <ResponsiveEmbed aspectRatio="16by9">
                    <CardMedia image={this.state.card.image} component="img" title="Event Image"/>
                  </ResponsiveEmbed>
                  <CardContent>
                    {this.state.card.content.map((text, key) => <p
                        key={key}
                        className='p-0 m-0'
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          textAlign: 'center'
                        }}
                      >{text}</p>
                    )}
                    <Row style={{marginTop: 10}}>
                      <Col md={-4} xs={-4} style={{marginLeft: 5}}>
                        {this.state.card.onlineLocation ? <ComputerOutlined/> : <LocationCityOutlined/>}
                      </Col>
                      <Col>
                        {this.state.card.location}
                      </Col>
                    </Row>
                    <Row style={{marginTop: 10}}>
                      <Col md={-4} xs={-4} style={{marginLeft: 5}}>
                        <WatchOutlined/>
                      </Col>
                      <Col>
                        {new Date(this.state.card.dateTime).toString()}
                      </Col>
                    </Row>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{alignContent: 'flex-end'}}>
                  <Button style={{color: 'white', backgroundColor: '#242424', alignSelf: 'right'}}>
                    Register
                  </Button>
                </CardActions>
              </Card>
            </Fade>
          </Modal> : null}
        <Row className="ml-3">
          <Button className="p-0"
                  disabled={window.innerWidth >= 768}
                  ref={(node) => {
                    this.accordion = node
                  }}
                  onClick={() => {
                    this.setState({openUp: !this.state.openUp})
                  }}
                  aria-controls={data.id}
                  aria-expanded={this.state.openUp}
                  style={{textTransform: "capitalize"}}
          >
            <h3
              style={{color: data.upcoming ? '#FBBD04' : '#34A852'}}>{data.upcoming ? 'Upcoming Events' : 'Recently Held Events'}</h3>
          </Button>
        </Row>
        {data ?
          <Row id={data._id} className="ml-3">
            <Collapse in={this.state.openUp}>
              {data.cards.map((card, index) => <Col xs="12" key={index}
                                                    className={`p-0 pr-4 mt-5`}
                                                    md="6" lg="4">
                <Card style={{
                  boxShadow: `-10px -10px ${data.upcoming ? '#FBBD04' : '#34A852'}`,
                  borderRadius: 10,
                  border: `2px solid ${data.upcoming ? '#FBBD04' : '#34A852'}`
                }}>
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
                    <Button onClick={() => {
                      this.clickEvent(card)
                    }}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Col>)}
            </Collapse>
          </Row>
          : null}
        <Hidden xsDown>
          {data.image ? <Col md="6" lg="6" className='my-auto'>
            <Paper elevation={3} style={{borderRadius: 10}} variant="outlined">
              <Image src={data.image} width="100%" style={{borderRadius: 10}}/>
            </Paper>
          </Col> : null}
        </Hidden>
      </React.Fragment>
    );
  }
}

export default EventSection;