import {
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import {resetFooterStyle, resetNavStyle, serverURL} from "../utils/utils";
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from "../components/project/ProjectCard";
import {Skeleton} from "@material-ui/lab";


export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{"_id":{"$oid":"5f6c1c9c1036f71a20512d30"},"title":"ChecXray","__v":{"$numberInt":"0"},"date":{"$date":{"$numberLong":"1600920732487"}},"description":"A flutter app to detect Covid-19 disease using chest radiographs.","github":"https://github.com/Parag0506/ChecXray","image":"https://cdn.discordapp.com/attachments/758539559725301791/758541162561798154/maxresdefault.png","youtube":"https://youtube.com/watch?v=NibhQZ93nfM"},{"_id":{"$oid":"5fdae4cd21b5cb5ddc5b659e"},"title":"Battery Safety Alertz","__v":{"$numberInt":"0"},"date":{"$date":{"$numberLong":"1608180633000"}},"description":"Get your best shot of safety in emergency situations. When the auto alert feature is turned on, your location along with a message will be automatically shared with your trusted contacts if your device is in about to die situation.","github":"https://github.com/Rehan2156/DSCWOW_Personal-Safety-Alertz","image":"https://cdn.discordapp.com/attachments/776295965254352936/788992482149924864/Screenshot_2020-12-17_at_10.23.43_AM.png","youtube":"https://www.youtube.com/watch?v=roNMDbMrnm0&ab_channel=RehanShaikh"},{"_id":{"$oid":"5fdb0f5d497fc5603f51ae85"},"title":"Face To BMI","date":{"$date":{"$numberLong":"1608191821000"}},"description":"Many people dont know how to calculate BMI or either find it too boring to calculate their BMI and thus don't know whether they themselves are healthy or not. Many health problems arise if a person is obese so if a person can estimate their BMI by just uploading their photo, they will be able to know about their health conditions and focus on improving their health.","github":"https://github.com/HritNan/CodeOFFDuty","image":"https://cdn.discordapp.com/attachments/758539559725301791/789037738548133888/facetobmi.jpeg","youtube":"https://youtu.be/3d8kr5o_RJA"},{"_id":{"$oid":"6035b85faee53617fcf28147"},"title":"Mysuru Tourism","date":{"$date":{"$numberLong":"1614153421000"}},"description":"The tourism sector in India has faced a major impact due to Covid-19. Many people have lost their jobs and the cities which depend on tourism as their main source of income and employment are in turmoil. To tackle this problem, we have come up with a solution which is an online website.","github":"https://github.com/Developer-Students-Clubs-MESCOE/Mysuru-Tourism-H-WOW","image":"https://cdn.discordapp.com/attachments/758539559725301791/813959672628379688/unknown.png","youtube":"https://youtu.be/khwYmE3IIQI"}],

      title: '',
      description: '',
      image: '',
      youtube: '',
      github: '',

      openUp: true,
      open: false,
      cardWidth: 700,
      cardHeight: 900,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(serverURL, {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      youtube: this.state.youtube,
      github: this.state.github
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.handleClose();
        window.location.reload();
      }).catch(err => {
      console.error(err.message);
    });
  }

  componentDidMount() {
    document.title = 'Projects - GDSC MESCOE';
    resetNavStyle({page: 'Projects'});

    axios.get(`${serverURL}/api/projects`)
      .then(res => {
        this.setState({projects: res.data});
        
      })
      .catch(err => console.error(err.message));
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  clickEvent = () => {
    this.handleOpen();
  }

  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle()
    }
    return (
      <Toolbar className='grid' style={{minHeight:"100vh"}}>
        <Container>
          <Row className="mt-5">
            <Col>
              <h3 style={{color: '#34A852', fontWeight: 600}} className='project'>Projects</h3>
            </Col>
          </Row>
          <Row className="ml-3">
            {this.state.projects.length ? this.state.projects.map((project, index) => <Col xs="12" key={index}
                                                                                           className="p-0 pr-4 mt-5 project"
                                                                                           md="6"
                                                                                           lg="4">
              <ProjectCard project={project}/>
            </Col>) : [0, 1, 2].map((s, index) =>
              <Col key={index} className="p-0 pr-4 mt-5" xs="12" md="6" lg="4">
                <Skeleton variant='rect' height={300} style={{borderRadius: 10}}/>
              </Col>
            )}
          </Row>
          <Row className='mb-5'/>
          <Row className='mb-5'/>
        </Container>
      </Toolbar>
    );
  }
}
