import React, {Component} from 'react';
import {ResponsiveEmbed, Row} from "react-bootstrap";
import {
  Button,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Fade,
  Backdrop,
  Modal
} from '@material-ui/core';
import {ComputerOutlined, LocationCityOutlined, WatchOutlined} from '@material-ui/icons'

class EventCard extends Component {
  state = {
    openUp: true,
    open: false,
    card: null,
    cardWidth: 700,
    cardHeight: 900,
  }

  componentDidMount() {
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
    const afterTime = new Date(data.dateTime)
    data.dateTime = new Date(data.dateTime)
    const duration = data.duration.split(":")
    const hours = parseInt(duration[0])
    const minutes = parseInt(duration[1])
    afterTime.setHours(data.dateTime.getHours() + hours)
    afterTime.setMinutes(data.dateTime.getMinutes() + minutes)
    return (
      <React.Fragment>
        {this.state.card ?
          <Modal
            style={{
              top: (window.innerHeight * 0.2),
              margin: "auto",
              width: this.state.cardWidth,
              height: this.state.cardHeight,
              borderColor: `${this.props.color}`
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
                boxShadow: `-10px -10px ${this.props.color}`,
                borderRadius: 10,
                border: `2px solid ${this.props.color}`
              }}>
                <CardActionArea>
                  <ResponsiveEmbed aspectRatio="16by9">
                    <CardMedia image={this.state.card.image} component="img" title="Event Image"/>
                  </ResponsiveEmbed>
                  <CardContent>
                    <h5>{data.title}</h5>
                    {this.state.card.content.map((text, key) => <p
                        key={key}
                        className='p-0 m-0'
                      >{text}</p>
                    )}
                    <Row className='mt-2 ml-1'>
                      {this.state.card.onlineLocation ? <ComputerOutlined className='mr-3'/> :
                        <LocationCityOutlined className='mr-3'/>}
                      {this.state.card.location}
                    </Row>
                    <Row className='mt-2 ml-1'>
                      <WatchOutlined className='mr-3'/>
                      {this.state.card.dateTime.toLocaleDateString()} {' from '}
                      {this.state.card.dateTime.toLocaleTimeString()} {' to '}
                      {afterTime.toLocaleTimeString()}
                    </Row>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{alignContent: 'flex-end'}}>
                  <Button href={data.registrationLink}
                          style={{color: 'white', backgroundColor: '#242424', alignSelf: 'right'}}>
                    Register
                  </Button>
                </CardActions>
              </Card>
            </Fade>
          </Modal>
          : null}

        <Card style={{
          boxShadow: `-10px -10px ${this.props.color}`,
          borderRadius: 10,
          border: `2px solid ${this.props.color}`
        }}>
          <CardActionArea>
            <ResponsiveEmbed aspectRatio="16by9">
              <CardMedia image={data.image} component="img" title="Event Image"/>
            </ResponsiveEmbed>
            <CardContent>
              <h6
                className='p-0 m-0'
              >{data.title}</h6>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => {
              this.clickEvent(data)
            }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default EventCard;