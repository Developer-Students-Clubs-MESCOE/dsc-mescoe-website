import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import {Button, CardActionArea, CardActions} from "@material-ui/core";
import {Col, Container, Image, Row} from "react-bootstrap";

class RankCard extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const data = this.props.data
    
    return (
      <Col>
        <Card style={{
          boxShadow: `-10px -10px ${data.medalColor}`,
          borderRadius: 10,
          border: `2px solid ${data.medalColor}`
        }}>
          <CardActionArea style={{backgroundColor:"var(--white)",color:"var(--black)"}}>
            <Container>
              <Row className='m-xl-4 m-lg-3 m-md-3 m-sm-3 mt-3 align-items-center'>
                {/*<Col xs={2}>*/}
                {/*  <Image className='my-auto'*/}
                {/*         src={data.profileImage}*/}
                {/*         style={{width: '100%', border: `4px solid ${data.medalColor}`, borderRadius: '50%'}}/>*/}
                {/*</Col>*/}
                <Col className='ml-4'>
                  <Row className='justify-content-between'>
                    <p className='h4 font-weight-bold'>{data.name}</p>
                    <p className='h5'>{data.rank === 0 ? null : `Rank -- #${data.rank}`}</p>
                  </Row>
                  <Row className='mt-2'>
                    <p className='h6'>Number of Skill Badges -- {data.numSkillBadges}</p>
                  </Row>
                  {/*<Row className='mt-2'>*/}
                  {/*  <p className='h6'>Date -- {data.lastBadgeDate}</p>*/}
                  {/*</Row>*/}
                </Col>
              </Row>
            </Container>
          </CardActionArea>
          
        </Card>
      </Col>
    );
  }
}

export default RankCard;