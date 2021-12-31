import React from "react";
import {Toolbar} from "@material-ui/core";
import {Container, Row, Col} from "react-bootstrap";
import {resetFooterStyle, resetNavStyle} from "../utils/utils";
import Dhruvil from "../assets/img/Dhruvil.jpg";
import Kaif from "../assets/img/Kaif.jpg";
import Karan from "../assets/img/Karan.jpg";
import Prem from "../assets/img/Prem.jpg";
import Varun from "../assets/img/Varun.jpg";
import Sakshi from "../assets/img/Sakshi.jpg";
import Tanya from "../assets/img/Tanya.jpg";
import Pratik from "../assets/img/Pratik.jpg";
import Laukik from "../assets/img/Laukik.jpg";
import Gaurav from "../assets/img/Gaurav.jpg";
import TeamComponent from "../components/team/team-component";


export default class Team2020 extends React.Component {
  constructor(props){
    super(props)
    
  }
  componentDidMount() {
    document.title = "Team2020 - GDSC MESCOE";
     window.scrollTo(0, 0)
    resetNavStyle({page: "Team"});
   
  }

  render() {
    const footer = document.querySelector('#contact');
    if (footer) {
      resetFooterStyle()
    }
    return (
      <Toolbar className='grid'>
        <Container className="mb-5">
          <Row className="mt-5 team">
            <Col>
              <h3 style={{color: '#4385F4', fontWeight: 600}}>Our Team</h3>
            </Col>
          </Row>
          <Row className="mt-5 team">
            <Col className="d-flex justify-content-center team-component">
              <TeamComponent
                name="Karan Wagh"
                role="Lead"
                imgUrl={Karan}
                gitHublink="https://github.com/FlashTech-dev"
                linkedInLink="https://www.linkedin.com/in/karanwagh"
              />
            </Col>
          </Row>

          <div className="row mt-5 tech-row team">
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Varun Irani"
                role="Technical Core"
                imgUrl={Varun}
                gitHublink="https://github.com/VarunIrani"
                linkedInLink="https://www.linkedin.com/in/varun-irani-b4275b192"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Prem Kulkarni"
                role="Technical Core"
                imgUrl={Prem}
                gitHublink="https://github.com/kulkarniprem04"
                linkedInLink="https://www.linkedin.com/in/prem-kulkarni-99a3451a1"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Pratik Temkar"
                role="Technical Core"
                imgUrl={Pratik}
                gitHublink="https://github.com/pratikstemkar"
                linkedInLink="https://www.linkedin.com/in/pratikstemkar"
              />
            </div>
          </div>

          <div className="row mt-5 pr-row team">
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Sakshi Chaudhari"
                role="Public Relations Core"
                imgUrl={Sakshi}
                gitHublink="https://github.com/sakshi-chaudhari"
                linkedInLink="https://www.linkedin.com/in/sakshi-chaudhari-b8585b192"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Tanya Raina"
                role="Public Relations Core"
                imgUrl={Tanya}
                gitHublink="https://github.com/TanyaRaina"
                linkedInLink="https://www.linkedin.com/in/tanya-raina-apr214"
              />
            </div>
          </div>

          <div className="row mt-5 last-row team">
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Laukik Chavan"
                role="Design Core"
                imgUrl={Laukik}
                gitHublink="https://github.com/leo13200006"
                linkedInLink="https://www.linkedin.com/in/laukik-chavan-aba574137"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Kaif Tamboli"
                role="Design Core"
                imgUrl={Kaif}
                gitHublink="https://github.com/kaift3"
                linkedInLink="https://www.linkedin.com/in/kaif-tamboli-916351193"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Gaurav Verma"
                role="Finance Core"
                imgUrl={Gaurav}
                gitHublink="https://github.com/thegauravverma"
                linkedInLink="https://www.linkedin.com/in/gaurav-verma-777a70174"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Dhruvil Shah"
                role="Finance Core"
                imgUrl={Dhruvil}
                gitHublink="https://github.com/ds-2803"
                linkedInLink="https://www.linkedin.com/in/dhruvil-shah-b416b018a"
              />
            </div>
          </div>
          <Row className='mb-5'/>
        </Container>
      </Toolbar>
    );
  }
}
