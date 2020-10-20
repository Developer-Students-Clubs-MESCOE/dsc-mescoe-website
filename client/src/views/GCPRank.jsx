import React, {Component} from 'react';
import {resetFooterStyle, resetNavStyle} from "../utils/utils";
import {Col, Container, Row} from "react-bootstrap";
import {Toolbar, Box, AppBar, Tabs, Tab} from "@material-ui/core";
import RankCard from "../components/RankCard";

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class GCPRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value});
  }

  componentDidMount() {
    document.title = 'GCP Rank - DSC MESCOE';
    resetNavStyle({page: 'GCP Rank'});
    if (JSON.parse(localStorage.getItem('isDarkMode'))) {
      document.querySelectorAll('.gcp').forEach(e => {
        e.classList.toggle('dark-mode')
      })
    }
  }

  medals = () => <Row>
    <Col>
      <Row>
        <span className='medal platinum'/>
        <p className='my-auto gcp'>Platinum</p>
      </Row>
    </Col>
    <Col>
      <Row>
        <span className='medal gold'/>
        <p className='my-auto gcp'>Gold</p>
      </Row>
    </Col>
    <Col>
      <Row>
        <span className='medal silver'/>
        <p className='my-auto gcp'>Silver</p>
      </Row>
    </Col>
    <Col>
      <Row>
        <span className='medal bronze'/>
        <p className='my-auto gcp'>Bronze</p>
      </Row>
    </Col>
  </Row>;

  MedalColors = {
    PLATINUM: '#e5e4e2',
    GOLD: '#FFD700',
    SILVER: '#c0c0c0',
    BRONZE: '#cd7f32'
  }

  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle()
    }
    const data = [
      {
        name: 'Varun Irani',
        medalColor: this.MedalColors.PLATINUM,
        profileURL: 'https://www.qwiklabs.com/public_profiles/550e6eba-50eb-4aa7-9ac2-f16278796940',
        profileImage: 'https://secure.gravatar.com/avatar/e6c79144cf9c63733ea5e8bd7c175299.png?s=80&d=mm',
        rank: 99,
        numSkillBadges: 99,
        lastBadgeName: 'Set up and Configure a Cloud Environment in Google Cloud',
        lastBadgeDate: 'Oct 11, 2020'
      },
      {
        name: 'Varun Irani',
        medalColor: this.MedalColors.GOLD,
        profileURL: 'https://www.qwiklabs.com/public_profiles/550e6eba-50eb-4aa7-9ac2-f16278796940',
        profileImage: 'https://secure.gravatar.com/avatar/e6c79144cf9c63733ea5e8bd7c175299.png?s=80&d=mm',
        rank: 99,
        numSkillBadges: 99,
        lastBadgeName: 'Set up and Configure a Cloud Environment in Google Cloud',
        lastBadgeDate: 'Oct 11, 2020'
      },
      {
        name: 'Varun Irani',
        medalColor: this.MedalColors.SILVER,
        profileURL: 'https://www.qwiklabs.com/public_profiles/550e6eba-50eb-4aa7-9ac2-f16278796940',
        profileImage: 'https://secure.gravatar.com/avatar/e6c79144cf9c63733ea5e8bd7c175299.png?s=80&d=mm',
        rank: 99,
        numSkillBadges: 99,
        lastBadgeName: 'Set up and Configure a Cloud Environment in Google Cloud',
        lastBadgeDate: 'Oct 11, 2020'
      },
      {
        name: 'Varun Irani',
        medalColor: this.MedalColors.BRONZE,
        profileURL: 'https://www.qwiklabs.com/public_profiles/550e6eba-50eb-4aa7-9ac2-f16278796940',
        profileImage: 'https://secure.gravatar.com/avatar/e6c79144cf9c63733ea5e8bd7c175299.png?s=80&d=mm',
        rank: 99,
        numSkillBadges: 99,
        lastBadgeName: 'Set up and Configure a Cloud Environment in Google Cloud',
        lastBadgeDate: 'Oct 11, 2020'
      },
    ]
    return (
      <Toolbar className='grid'>
        <Container>
          <Row className="mt-5">
            <Col>
              <h3 style={{color: '#8a3fff'}} className='gcp'>30 Days of Google Cloud</h3>
            </Col>
          </Row>
          <Row className='mb-3'/>
          <AppBar position='static' color='inherit'>
            <Tabs
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#8a3fff',
                  height: 4
                }
              }}
              value={this.state.value}
              aria-label="rank tabs"
              variant="scrollable"
            >
              <Tab label="Cloud Engineering" {...a11yProps(0)} style={{fontFamily: 'Google Sans', fontWeight: 'bold'}}
                   onClick={() => {
                     this.handleChange(0)
                   }}/>
              <Tab label="Data Science and ML" {...a11yProps(1)} style={{fontFamily: 'Google Sans', fontWeight: 'bold'}}
                   onClick={() => {
                     this.handleChange(1)
                   }}/>
            </Tabs>
          </AppBar>
          <TabPanel value={this.state.value} index={0} style={{backgroundColor: 'white'}}
                    className='mb-5 MuiPaper-elevation3'>
            <Container>
              <Row>
                <Col xl={3}>
                  <h4 style={{color: '#222'}}>Cloud Engineering</h4>
                </Col>
                <Col className='gcp'>
                  {this.medals()}
                </Col>
              </Row>
              {data.map((d, index) => <Row className='mt-4 gcp' key={index}>
                <RankCard data={d}/>
              </Row>)}
            </Container>
          </TabPanel>
          <TabPanel value={this.state.value} index={1} style={{backgroundColor: 'white'}}
                    className='mb-5 MuiPaper-elevation3'>
            <Container>
              <Row>
                <Col xl={5}>
                  <h4 style={{color: '#222'}}>Data Science and Machine Learning</h4>
                </Col>
                <Col className='gcp'>
                  {this.medals()}
                </Col>
              </Row>
              {data.map((d, index) => <Row className='mt-4' key={index}>
                <RankCard data={d}/>
              </Row>)}
            </Container>
          </TabPanel>
          <Row className='mb-5'/>
        </Container>
      </Toolbar>
    );
  }
}

export default GCPRank;