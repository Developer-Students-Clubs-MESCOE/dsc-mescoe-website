import React from "react";
import { Toolbar } from "@material-ui/core";
import { Container, Image, Row, Col } from "react-bootstrap";
// import { GitHub, LinkedIn } from "@material-ui/icons";
import { resetNavStyle } from "../utils/utils";

// import "./Team.css";

import team from "../assets/img/team.webp";
import gdglogo from "../assets/img/gdg_logo.png";
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

import TeamComponent from "../components/team-component/team-component";

export default class Team extends React.Component {
  componentDidMount() {
    document.title = "Team - DSC MESCOE";
    resetNavStyle({ page: "Team" });
  }

  render() {
    //const classes = this.useStyles()
    return (
      <Toolbar style={{ marginLeft: 100, marginRight: 100 }} className="p-0">
        <Container fluid>
          {/* main header  */}
          <Row className="mt-5 d-flex align-items-center">
            {/* logo and dsc name */}
            <Col>
              <Row className="d-flex align-items-center">
                <Col xs="3">
                  <Image src={gdglogo} style={{ width: "100%" }} />
                </Col>
                <Col
                  sm="7"
                  className="text-align-center"
                  style={{ fontSize: "30px" }}
                >
                  DSC MESCOE 2020-21
                </Col>
              </Row>
              {/* Team introduction */}
              <Row lg="2" className="mt-5" style={{ fontSize: "25px" }}>
                Presenting you the team of DSC Mescoe for 2020-2021
              </Row>
            </Col>
            {/* team image */}
            <Col md="4">
              <Image src={team} style={{ height: "330px", width: "380px" }} />
            </Col>
          </Row>

          <div className="mt-5 mb-5">
            <div className="row mt-5 lead-row">
              <div className="col-sm d-flex justify-content-center team-component">
                <TeamComponent
                  name="Karan Wagh"
                  role="Lead"
                  imgUrl={Karan}
                  gitHublink="https://github.com/FlashTech-dev"
                  linkedInLink="https://www.linkedin.com/in/karanwagh"
                />
              </div>
            </div>

            <div className="row mt-5 tech-row">
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

            <div className="row mt-5 pr-row">
              <div className="col-sm d-flex justify-content-center team-component">
                <TeamComponent
                  name="Sakshi Chaudhry"
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

            <div className="row mt-5 last-row">
              <div className="col-sm d-flex justify-content-center team-component">
                <TeamComponent
                  name="Laukik chavan"
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
          </div>
        </Container>
      </Toolbar>
    );
  }
}
