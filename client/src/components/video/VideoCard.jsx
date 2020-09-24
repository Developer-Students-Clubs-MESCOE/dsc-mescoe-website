import React, {Component} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent} from "@material-ui/core";
import {ResponsiveEmbed} from "react-bootstrap";
import ReactPlayer from "react-player";

class VideoCard extends Component {
  render() {
    const video = this.props.video
    return (
      <Card style={{
        boxShadow: `-10px -10px #EA4435`,
        borderRadius: 10,
        border: `2px solid #EA4435`
      }} className="no-dark">
        <CardActionArea>
          <ResponsiveEmbed aspectRatio="16by9">
            <ReactPlayer height="100%" width="100%" url={video.url}/>
          </ResponsiveEmbed>
          <CardContent>
            <p className='p-0 m-0' style={{ fontSize: 16, fontWeight: "normal", }}>
              <b>{video.name}</b><br />
              <b>Description: </b>{video.description}<br />
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{color: '#EA4435'}} target="_blank" href={video.url}>Watch Now</Button>
        </CardActions>
      </Card>
    );
  }
}

export default VideoCard;