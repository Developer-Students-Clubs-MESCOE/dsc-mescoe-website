import React from "react";
import { Toolbar } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { resetFooterStyle, resetNavStyle } from "../utils/utils";
import param from "../assets/img/Param2.png";
import hritvikk from "../assets/img/Hritvikk2.png";
import vaibhav from "../assets/img/Vaibhav1.png";
import manav from "../assets/img/Manav2.png";
import shreyash from "../assets/img/Shreyash2.png";
import kundan from "../assets/img/Kundan2.png";
import pari from "../assets/img/Pari2.png";
import pracheeti from "../assets/img/Pracheeti2.png";
import zeeshan from "../assets/img/Zeeshan2.png";
import priyanka from "../assets/img/Priyanka2.png";
import pratiksha from "../assets/img/Pratiksha2.png";
import mihir from "../assets/img/Mihir2.png";
import dipam from "../assets/img/Dipam2.png";
import tanvi from "../assets/img/Tanvi2.png";


import TeamComponent from "../components/team/team-component";

export default class Team2020 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "Team2020 - GDSC MESCOE";
    window.scrollTo(0, 0);
    resetNavStyle({ page: "Team" });
  }

  render() {
    const footer = document.querySelector("#contact");
    if (footer) {
      resetFooterStyle();
    }
    return (
      <Toolbar className="grid">
        <Container className="mb-5">
          <Row className="mt-5 team">
            <Col>
              <h3 style={{ color: "#4385F4", fontWeight: 600 }}>Our Team</h3>
            </Col>
          </Row>
          <Row className="mt-5 team">
            <Col className="d-flex justify-content-center team-component">
              <TeamComponent
                name="Vaibhav Bhapkar"
                role="Lead"
                imgUrl={vaibhav}
                gitHublink="https://github.com/Vaibhav-84"
                linkedInLink="https://www.linkedin.com/in/vaibhav-bhapkar84"
              />
            </Col>
          </Row>

          <div className="row mt-5 tech-row team">
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Manav Mandal"
                role="Technical Core"
                imgUrl={manav}
                gitHublink="https://github.com/MXNXV"
                linkedInLink="https://www.linkedin.com/in/manav-mandal-5b1496196/"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Hritvikk Gupta"
                role="Technical Core"
                imgUrl={hritvikk}
                gitHublink="https://github.com/Hritvikk"
                linkedInLink="http://www.linkedin.com/in/hritvikk-gupta"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Param Tatiya"
                role="Technical Core"
                imgUrl={param}
                gitHublink="https://github.com/ParamTatiya02"
                linkedInLink="http://www.linkedin.com/in/param-tatiya-2660281b3"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Shreyash Yewale"
                role="Technical Core"
                imgUrl={shreyash}
                gitHublink="https://github.com/ShreyashYewale"
                linkedInLink="https://www.linkedin.com/in/shreyash-yewale-11a341166/"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Kundan Surve"
                role="Technical Core"
                imgUrl={kundan}
                gitHublink="https://github.com/kundansurve"
                linkedInLink="https://www.linkedin.com/in/kundan-surve-593b841aa/"
              />
            </div>
          </div>

          <div className="row mt-5 pr-row team">
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Pracheeti Bhukan"
                role="Public Relations Core"
                imgUrl={pracheeti}
                gitHublink="https://github.com/Prachiti-bhukan"
                linkedInLink="https://www.linkedin.com/in/prachiti-bhukan-5302921b0"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Zeeshan Patel"
                role="Public Relations Core"
                imgUrl={zeeshan}
                gitHublink="#"
                linkedInLink="https://www.linkedin.com/in/mohammed-zeeshan-patel-a894491a2"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Tanvi Budhabaware"
                role="Public Relations Core"
                imgUrl={tanvi}
                gitHublink="https://github.com/TanviNB"
                linkedInLink="https://www.linkedin.com/in/tanvi-budhabaware/"
              />
            </div>
          </div>

          <div className="row mt-5 last-row team">
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Priyanka Salunke"
                role="Design Core"
                imgUrl={priyanka}
                gitHublink="https://github.com/priyankapiba"
                linkedInLink="https://www.linkedin.com/in/priyankasalunke"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Dipam Patle"
                role="Design Core"
                imgUrl={dipam}
                gitHublink="https://github.com/dipam11"
                linkedInLink="https://www.linkedin.com/in/dipam-patle-2a9a361b3"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <TeamComponent
                name="Pratiksha Surve"
                role="Design Core"
                imgUrl={pratiksha}
                gitHublink="https://github.com/pratiksha2811"
                linkedInLink="https://www.linkedin.com/in/pratiksha-surve-a26600203"
              />
            </div>
            <div className="col-sm d-flex justify-content-center team-component">
              <div className="col-sm d-flex justify-content-center team-component">
                <TeamComponent
                  name="Pari Zunake"
                  role="Finance Core"
                  imgUrl={pari}
                  gitHublink="https://github.com/parizunake"
                  linkedInLink="https://www.linkedin.com/in/pari-zunake-4b92911b7"
                />
              </div>
              <div className="col-sm d-flex justify-content-center team-component">
                <TeamComponent
                  name="Mihir Pankhawala"
                  role="Finance Core"
                  imgUrl={mihir}
                  gitHublink="#"
                  linkedInLink="https://www.linkedin.com/in/mihir-pankhawala-baa2531bb/"
                />
              </div>
            </div>
          </div>
          <Row className="mb-5" />
        </Container>
      </Toolbar>
    );
  }
}
