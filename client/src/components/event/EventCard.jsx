import React, {Component} from 'react';
import {ResponsiveEmbed, Row, Modal} from "react-bootstrap";
import {
  Button,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
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
    this.setState({ card: card })
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
            style={{zIndex: 9999}}
            size='lg'
            show={this.state.open}
            onHide={() => {
              this.toggleEventModal()
            }}
            onShow={() => {
              if (JSON.parse(localStorage.getItem('isDarkMode'))) {
                
              }
            }}

            centered
          >
            <Card style={{
              boxShadow: `-10px -10px ${this.props.color}`,
              borderRadius: 10,
              border: `2px solid ${this.props.color}`,
             
            }} className="event-modal">
              <CardActionArea>
                <ResponsiveEmbed aspectRatio='16by9'>
                  <CardMedia image={this.state.card.image} component="img" title="Event Image"/>
                </ResponsiveEmbed>
                <CardContent style={{backgroundColor:"var(--white)",color:"var(--black)"}}>
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
              <CardActions style={{backgroundColor:"var(--card)",color:"var(--black)"}}>
                <Button size='large' className='mr-auto' onClick={this.toggleEventModal}
                        style={{color: 'white', backgroundColor: 'red'}}>
                  Close
                </Button>
                <Button className='ml-auto' href={data.registrationLink} size='large'
                        style={{color: 'white', backgroundColor: '#141414'}}>
                  Register
                </Button>
              </CardActions>
            </Card>
          </Modal>
          : null}

        <Card style={{
          boxShadow: `-10px -10px ${this.props.color}`,
          borderRadius: 10,
          border: `2px solid ${this.props.color}`
        }} className="">
          <CardActionArea>
            <ResponsiveEmbed aspectRatio="16by9">
              <CardMedia image={data.image} component="img" title="Event Image"/>
            </ResponsiveEmbed>
            <CardContent  style={{backgroundColor:"var(--white)",color:"var(--black)"}}>
              <h6
                className='p-0 m-0'
              >{data.title}</h6>
            </CardContent>
          </CardActionArea>
          <CardActions  style={{backgroundColor:"var(--white)",color:"var(--black)"}} >
            <Button style={{color:"var(--black)"}} onClick={() => {
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