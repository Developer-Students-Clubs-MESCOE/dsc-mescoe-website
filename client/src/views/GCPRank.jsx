import React, { Component } from 'react';
import { resetFooterStyle, resetNavStyle } from '../utils/utils';
import { Col, Container, Row } from 'react-bootstrap';
import { Toolbar, Box, AppBar, Tabs, Tab } from '@material-ui/core';
import RankCard from '../components/RankCard';
import Axios from 'axios';
import { serverURL } from '../utils/utils';
import { Skeleton } from '@material-ui/lab';
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

class GCPRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      track1: [],
      track2: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  componentDidMount() {
    document.title = 'GCP Rank - DSC MESCOE';
    resetNavStyle({ page: 'GCP Rank' });
    Axios.get(`${serverURL}/api/ranks/track1`).then((track1) => {
      Axios.get(`${serverURL}/api/ranks/track2`).then((track2) => {
        let track1Data = [];
        let track2Data = [];
        track1.data.forEach((data) => {
          let medal;
          if (data.rank === 0) {
            medal = this.MedalColors.PLATINUM;
          } else if (data.rank === 1) {
            medal = this.MedalColors.GOLD;
          } else if (data.rank === 2) {
            medal = this.MedalColors.SILVER;
          } else if (data.rank === 3) {
            medal = this.MedalColors.BRONZE;
          } else {
            medal = this.MedalColors.NORMAL;
          }
          track1Data.push({
            name: data.name,
            rank: data.rank,
            profileURL: data.qwiklabs_profile,
            medalColor: medal,
            numSkillBadges: data.track1_count,
            lastBadgeName: data.latest_track1
          });
        });
        track2.data.forEach((data) => {
          let medal;
          if (data.rank === 0) {
            medal = this.MedalColors.PLATINUM;
          } else if (data.rank === 1) {
            medal = this.MedalColors.GOLD;
          } else if (data.rank === 2) {
            medal = this.MedalColors.SILVER;
          } else if (data.rank === 3) {
            medal = this.MedalColors.BRONZE;
          } else {
            medal = this.MedalColors.NORMAL;
          }
          track2Data.push({
            name: data.name,
            rank: data.rank,
            profileURL: data.qwiklabs_profile,
            medalColor: medal,
            numSkillBadges: data.track2_count,
            lastBadgeName: data.latest_track2
          });
        });
        this.setState({ track1: track1Data, track2: track2Data });
      });
    });
    if (JSON.parse(localStorage.getItem('isDarkMode'))) {
      document.querySelectorAll('.gcp').forEach((e) => {
        e.classList.toggle('dark-mode');
      });
    }
  }

  medals = () => (
    <Row className='justify-content-center'>
      <Col xs={3}>
        <Row className='justify-content-center'>
          <span className='medal platinum' />
          <p className='my-auto gcp'>Platinum</p>
        </Row>
      </Col>
      <Col xs={3}>
        <Row className='justify-content-center'>
          <span className='medal gold' />
          <p className='my-auto gcp'>Gold</p>
        </Row>
      </Col>
      <Col xs={3}>
        <Row className='justify-content-center'>
          <span className='medal silver' />
          <p className='my-auto gcp'>Silver</p>
        </Row>
      </Col>
      <Col xs={3}>
        <Row className='justify-content-center'>
          <span className='medal bronze' />
          <p className='my-auto gcp'>Bronze</p>
        </Row>
      </Col>
    </Row>
  );

  MedalColors = {
    PLATINUM: '#e5e4e2',
    GOLD: '#FFD700',
    SILVER: '#c0c0c0',
    BRONZE: '#cd7f32',
    NORMAL: '#8a3fff'
  };

  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle();
    }
    const track1 = this.state.track1;
    const track2 = this.state.track2;
    return (/*
      <Toolbar className='grid'>
        <Container>
          <Row className='mt-5'>
            <Col>
              <h3 style={{ color: '#8a3fff' }} className='gcp'>
                30 Days of Google Cloud
              </h3>
            </Col>
          </Row>
          <Row className='mb-3' />
          <AppBar position='static' color='inherit'>
            <Tabs
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#8a3fff',
                  height: 4
                }
              }}
              value={this.state.value}
              aria-label='rank tabs'
              variant='scrollable'>
              <Tab
                label='Cloud Engineering'
                {...a11yProps(0)}
                style={{ fontFamily: 'Google Sans', fontWeight: 'bold' }}
                onClick={() => {
                  this.handleChange(0);
                }}
              />
              <Tab
                label='Data Science and ML'
                {...a11yProps(1)}
                style={{ fontFamily: 'Google Sans', fontWeight: 'bold' }}
                onClick={() => {
                  this.handleChange(1);
                }}
              />
            </Tabs>
          </AppBar>
          <TabPanel
            value={this.state.value}
            index={0}
            style={{ backgroundColor: 'white' }}
            className='mb-5 MuiPaper-elevation3'>
            <Container>
              <Row>
                <Col xl={3}>
                  <h4 style={{ color: '#222' }}>Cloud Engineering</h4>
                </Col>
                <Col className='gcp'>{this.medals()}</Col>
              </Row>
              {track1.length ? (
                <React.Fragment>
                  {track1
                    .filter((e) => e.medalColor === this.MedalColors.PLATINUM)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track1
                    .filter((e) => e.medalColor === this.MedalColors.GOLD)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track1
                    .filter((e) => e.medalColor === this.MedalColors.SILVER)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track1
                    .filter((e) => e.medalColor === this.MedalColors.BRONZE)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track1
                    .filter((e) => e.medalColor === this.MedalColors.NORMAL)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                </React.Fragment>
              ) : (
                <Skeleton
                  className='mt-3'
                  variant='rect'
                  height={200}
                  style={{ borderRadius: 10 }}
                />
              )}
            </Container>
          </TabPanel>
          <TabPanel
            value={this.state.value}
            index={1}
            style={{ backgroundColor: 'white' }}
            className='mb-5 MuiPaper-elevation3'>
            <Container>
              <Row>
                <Col xl={3}>
                  <h4 style={{ color: '#222' }}>Data Science and ML</h4>
                </Col>
                <Col className='gcp'>{this.medals()}</Col>
              </Row>
              {track2.length ? (
                <React.Fragment>
                  {track2
                    .filter((e) => e.medalColor === this.MedalColors.PLATINUM)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track2
                    .filter((e) => e.medalColor === this.MedalColors.GOLD)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track2
                    .filter((e) => e.medalColor === this.MedalColors.SILVER)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track2
                    .filter((e) => e.medalColor === this.MedalColors.BRONZE)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {track2
                    .filter((e) => e.medalColor === this.MedalColors.NORMAL)
                    .map((d, index) => (
                      <Row className='mt-4 gcp' key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                </React.Fragment>
              ) : (
                <Skeleton
                  className='mt-3'
                  variant='rect'
                  height={200}
                  style={{ borderRadius: 10 }}
                />
              )}
            </Container>
          </TabPanel>
          <Row className='mb-5' />
        </Container>
      </Toolbar>*/
      <Row className='m-5 text-center'>
            <Col>
              <h3 style={{ color: '#8a3fff'}} className='gcp'>
                Ranking will be displayed on 27th September.
              </h3>
            </Col>
        </Row>
    );
  }
}

export default GCPRank;
