import ReactPlayer from "react-player";
import React, { Component } from "react";
import { ResponsiveEmbed, Modal } from "react-bootstrap";
import {
  Button,
  CardActionArea,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

class VideoCard extends Component {
  state = {
    openUp: true,
    open: false,
    card: null,
    cardWidth: 700,
    cardHeight: 900,
  };

  componentDidMount() {
    if (window.innerWidth <= 1024) {
      this.setState({
        cardWidth: window.innerWidth * 0.8,
        cardHeight: window.innerHeight * 0.8,
      });
    }
  }

  toggleEventModal = () => {
    this.setState({ open: !this.state.open });
  };

  clickEvent = (card) => {
    this.setState({ card: card });
    this.toggleEventModal();
  };
  render() {
    const video = this.props.video;
    
    return (
      <React.Fragment>
        {this.state.card ? (
          <Modal
            style={{ zIndex: 9999 }}
            size="lg"
            show={this.state.open}
            onHide={() => {
              this.toggleEventModal();
            }}
            onShow={() => {
              if (JSON.parse(localStorage.getItem("isDarkMode"))) {
                document.querySelectorAll(".event-modal").forEach((e) => {
                  e.classList.toggle("dark-mode");
                });
              }
            }}
            centered
          >
            <Card
              style={{
                boxShadow: `-10px -10px #EA4435`,
                borderRadius: 10,
                border: `2px solid #EA4435`,
              }}
              className=""
            >
              <CardActionArea>
                <ResponsiveEmbed aspectRatio="16by9">
                  <ReactPlayer height="100%" width="100%" url={video.url} />
                </ResponsiveEmbed>
                <CardContent
                  style={{
                    backgroundColor: "var(--white)",
                    color: "var(--black)",
                  }}
                >
                  <p
                    className="p-0 m-0"
                    style={{ fontSize: 16, fontWeight: "normal" }}
                  >
                    <b>{video.name}</b>
                    <br />
                    <b>Description: </b>
                    {video.description}
                    <br />
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--black)",
                }}
              >
                <Button
                  size="large"
                  className="mr-auto"
                  onClick={this.toggleEventModal}
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  Close
                </Button>
                <Button
                  className="ml-auto"
                  href={video.url}
                  size="large"
                  style={{ color: "white", backgroundColor: "#242424" }}
                >
                  Watch Now
                </Button>
              </CardActions>
            </Card>
          </Modal>
        ) : null}
        <Card
          style={{
            boxShadow: `-10px -10px #EA4435`,
            borderRadius: 10,
            border: `2px solid #EA4435`,
          }}
          className=""
        >
          <CardActionArea>
            <ResponsiveEmbed aspectRatio="16by9">
              <ReactPlayer height="100%" width="100%" url={video.url} />
            </ResponsiveEmbed>
            <CardContent
              style={{
                backgroundColor: "var(--white)",
                color: "var(--black)",
              }}
            >
              <h6 className="p-0 m-0">{video.name}</h6>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
          >
            <Button
              style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
              onClick={() => {
                this.clickEvent(video);
              }}
            >
              View Description
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default VideoCard;
