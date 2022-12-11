import React, { Component } from "react";
import { resetFooterStyle, resetNavStyle } from "../utils/utils";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { Toolbar, Box, AppBar, Tabs, Tab } from "@material-ui/core";
import RankCard from "../components/RankCard";
import Axios from "axios";
import { serverURL } from "../utils/utils";
import { Skeleton } from "@material-ui/lab";
import "./CSSFiles/Rank.css";
import darkbgimg from "../assets/img/darkmodebg.svg";
import gdgLogo from "../assets/img/gdg_logo.png";
import gdg_black from "../assets/img/gdg_black.png";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

class GCPRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      track1: [
        {
          0: "Satyam Vishwakarma",
          1: { $numberInt: "6" },
          2: { $numberInt: "6" },
          _id: { $oid: "617d24ccb1b7d313d1758b5e" },
        },
        {
          0: "Vaibhav Singh",
          1: { $numberInt: "1" },
          2: { $numberInt: "1" },
          _id: { $oid: "617d24ccb1b7d313d1758b60" },
        },
        {
          0: "Dhruvil Shah",
          1: { $numberInt: "6" },
          2: { $numberInt: "6" },
          _id: { $oid: "617d24ccb1b7d313d1758b63" },
        },
      ],
      track2: [],
      searchtrack1: [
        {
          0: "Satyam Vishwakarma",
          1: { $numberInt: "6" },
          2: { $numberInt: "6" },
          _id: { $oid: "617d24ccb1b7d313d1758b5e" },
        },
        {
          0: "Vaibhav Singh",
          1: { $numberInt: "1" },
          2: { $numberInt: "1" },
          _id: { $oid: "617d24ccb1b7d313d1758b60" },
        },
        {
          0: "Dhruvil Shah",
          1: { $numberInt: "6" },
          2: { $numberInt: "6" },
          _id: { $oid: "617d24ccb1b7d313d1758b63" },
        },
      ],
      searchtrack2: [
        {
          0: "Satyam Vishwakarma",
          1: { $numberInt: "6" },
          2: { $numberInt: "6" },
          _id: { $oid: "617d24ccb1b7d313d1758b5e" },
        },
        {
          0: "Vaibhav Singh",
          1: { $numberInt: "1" },
          2: { $numberInt: "1" },
          _id: { $oid: "617d24ccb1b7d313d1758b60" },
        },
        {
          0: "Dhruvil Shah",
          1: { $numberInt: "6" },
          2: { $numberInt: "6" },
          _id: { $oid: "617d24ccb1b7d313d1758b63" },
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    if (JSON.parse(localStorage.getItem("isDarkMode"))) {
      document.querySelectorAll(".logo-switch").forEach((e) => {
        e.src = gdg_black;
      });
      document
        .querySelector(":root")
        .style.setProperty("--transparent", `rgba(18,18,18,0.8)`);
      document.querySelector(":root").style.setProperty("--white", `#121212`);
      document.querySelector(":root").style.setProperty("--black", `#ffffff`);
      document
        .querySelector(":root")
        .style.setProperty("--bg-img", `url("${darkbgimg}")`);
    }
  }

  handleChange(value) {
    this.setState({ value });
  }

  componentDidMount() {
    document.title = "GCP Rank - DSC MESCOE";
    resetNavStyle({ page: "GCP Rank" });
    Axios.get(`${serverURL}/api/ranks/track1`).then((track1) => {
      Axios.get(`${serverURL}/api/ranks/track2`).then((track2) => {
        let track1Data = [
          {
            0: "Satyam Vishwakarma",
            1: { $numberInt: "6" },
            2: { $numberInt: "6" },
            _id: { $oid: "617d24ccb1b7d313d1758b5e" },
          },
          {
            0: "Vaibhav Singh",
            1: { $numberInt: "1" },
            2: { $numberInt: "1" },
            _id: { $oid: "617d24ccb1b7d313d1758b60" },
          },
          {
            0: "Dhruvil Shah",
            1: { $numberInt: "6" },
            2: { $numberInt: "6" },
            _id: { $oid: "617d24ccb1b7d313d1758b63" },
          },
        ];
        let track2Data = [];
        track1Data.forEach((data) => {
          
          let medal;
          if (data.rank === 1) {
            medal = this.MedalColors.DIAMOND;
          } else if (data.rank === 2) {
            medal = this.MedalColors.GOLD;
          } else if (data.rank === 3) {
            medal = this.MedalColors.SILVER;
          } else if (data.rank === 4) {
            medal = this.MedalColors.BRONZE;
          } else {
            medal = this.MedalColors.NORMAL;
          }
          track1Data.push({
            name: data.name,
            rank: data.rank,
            medalColor: medal,
            numSkillBadges: data.track1_count,
          });
        });
        track2.data.forEach((data) => {
          let medal;
          if (data.rank === 1) {
            medal = this.MedalColors.DIAMOND;
          } else if (data.rank === 2) {
            medal = this.MedalColors.GOLD;
          } else if (data.rank === 3) {
            medal = this.MedalColors.SILVER;
          } else if (data.rank === 4) {
            medal = this.MedalColors.BRONZE;
          } else {
            medal = this.MedalColors.NORMAL;
          }
          track2Data.push({
            name: data.name,
            rank: data.rank,
            medalColor: medal,
            numSkillBadges: data.track2_count,
          });
        });
        this.setState({
          track1: track1Data,
          track2: track2Data,
          searchtrack1: track1Data,
          searchtrack2: track2Data,
        });
      });
    });
    if (JSON.parse(localStorage.getItem("isDarkMode"))) {
      document.querySelectorAll(".logo-switch").forEach((e) => {
        e.src = gdg_black;
      });
      document
        .querySelector(":root")
        .style.setProperty("--transparent", `rgba(18,18,18,0.8)`);
      document.querySelector(":root").style.setProperty("--white", `#121212`);
      document.querySelector(":root").style.setProperty("--black", `#ffffff`);
      document
        .querySelector(":root")
        .style.setProperty("--bg-img", `url("${darkbgimg}")`);
    } else {
      document.querySelectorAll(".logo-switch").forEach((e) => {
        e.src = gdgLogo;
      });
    }
  }
  medals = () => (
    <Row className="justify-content-center">
      <Col xs={3}>
        <Row className="justify-content-center">
          <button
            className="medal diamond"
            value={this.MedalColors.DIAMOND}
            style={{ border: "none" }}
            onClick={this.filterByBadge}
          />
          <p className="my-auto gcp">Diamond</p>
        </Row>
      </Col>
      <Col xs={3}>
        <Row className="justify-content-center">
          <button
            className="medal gold"
            value={this.MedalColors.GOLD}
            style={{ border: "none" }}
            onClick={this.filterByBadge}
          />
          <p className="my-auto gcp">Gold</p>
        </Row>
      </Col>
      <Col xs={3}>
        <Row className="justify-content-center">
          <button
            className="medal silver"
            value={this.MedalColors.SILVER}
            style={{ border: "none" }}
            onClick={this.filterByBadge}
          />
          <p className="my-auto gcp">Silver</p>
        </Row>
      </Col>
      <Col xs={3}>
        <Row className="justify-content-center">
          <button
            className="medal bronze"
            value={this.MedalColors.BRONZE}
            style={{ border: "none" }}
            onClick={this.filterByBadge}
          />
          <p className="my-auto gcp">Bronze</p>
        </Row>
      </Col>
    </Row>
  );
  handleChangeInput = (e) => {
    if (this.state.value === 0) {
      this.setState({
        searchtrack1: this.state.track1.filter((item) => {
          return item.name
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase());
        }),
      });
    } else {
      this.setState({
        searchtrack2: this.state.track2.filter((item) => {
          return item.name
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase());
        }),
      });
    }
  };
  filterByBadge = (badge) => {
    if (this.state.value === 0) {
      this.setState({
        searchtrack1: this.state.track1.filter((item) => {
          return item.medalColor === badge.target.value;
        }),
      });
    } else {
      this.setState({
        searchtrack2: this.state.track2.filter((item) => {
          return item.medalColor === badge.target.value;
        }),
      });
    }
  };
  MedalColors = {
    DIAMOND: "#b9f2ff",
    GOLD: "#FFD700",
    SILVER: "#c0c0c0",
    BRONZE: "#cd7f32",
    NORMAL: "#8a3fff",
  };

  render() {
    const footer = document.querySelector("#contact");
    if (footer) {
      resetFooterStyle();
    }
    
    return (
      <Toolbar className="grid">
        <Container>
          <Row className="mt-5">
            <Col>
              <h3 style={{ color: "#8a3fff" }} className="gcp">
                30 Days of Google Cloud
              </h3>
            </Col>
            <Col>
              <input
                id="admin-manage-faculty-textfield"
                type="text"
                className="form-control p-2 text-center"
                style={{
                  border: "1px solid #7b7f85",
                  borderRadius: 20,
                  width: "300px",
                }}
                placeholder="Search Your Name Here"
                onInput={this.handleChangeInput}
              />
            </Col>
          </Row>
          <Row className="mb-3 mt-3">
            <Alert variant="danger">
              Data gets updated after every 24 hours
            </Alert>
          </Row>
          <AppBar
            position="static"
            color="inherit"
            style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
          >
            <Tabs
              TabIndicatorProps={{
                style: {
                  backgroundColor: "var(--white)",
                  color: "var(--black)",
                  height: 4,
                },
              }}
              value={this.state.value}
              aria-label="rank tabs"
              variant="scrollable"
            >
              <Tab
                label="Cloud Engineering"
                {...a11yProps(0)}
                style={{
                  fontFamily: "Google Sans",
                  fontWeight: "bold",
                  backgroundColor: "var(--white)",
                  color: "var(--black)",
                }}
                onClick={() => {
                  this.handleChange(0);
                }}
              />
              <Tab
                label="Data Science and ML"
                {...a11yProps(1)}
                style={{
                  fontFamily: "Google Sans",
                  fontWeight: "bold",
                  backgroundColor: "var(--white)",
                  color: "var(--black)",
                }}
                onClick={() => {
                  this.handleChange(1);
                }}
              />
            </Tabs>
          </AppBar>
          <TabPanel
            value={this.state.value}
            index={0}
            style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
            className="mb-5 MuiPaper-elevation3"
          >
            <Container
              style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
            >
              <Row>
                <Col xl={3}>
                  <h4 style={{ color: "#222" }}>Cloud Engineering</h4>
                </Col>
                <Col className="gcp">{this.medals()}</Col>
              </Row>
              {this.state.searchtrack1.length ? (
                <React.Fragment>
                  {this.state.searchtrack1
                    .filter((e) => e.medalColor === this.MedalColors.DIAMOND)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack1
                    .filter((e) => e.medalColor === this.MedalColors.GOLD)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack1
                    .filter((e) => e.medalColor === this.MedalColors.SILVER)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack1
                    .filter((e) => e.medalColor === this.MedalColors.BRONZE)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack1
                    .filter((e) => e.medalColor === this.MedalColors.NORMAL)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                </React.Fragment>
              ) : (
                <Skeleton
                  className="mt-3"
                  variant="rect"
                  height={200}
                  style={{ borderRadius: 10 }}
                />
              )}
            </Container>
          </TabPanel>
          <TabPanel
            value={this.state.value}
            index={1}
            style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
            className="mb-5 MuiPaper-elevation3"
          >
            <Container
              style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
            >
              <Row>
                <Col xl={3}>
                  <h4 style={{ color: "#222" }}>Data Science and ML</h4>
                </Col>
                <Col className="gcp">{this.medals()}</Col>
              </Row>
              {this.state.searchtrack2.length ? (
                <React.Fragment>
                  {this.state.searchtrack2
                    .filter((e) => e.medalColor === this.MedalColors.DIAMOND)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack2
                    .filter((e) => e.medalColor === this.MedalColors.GOLD)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack2
                    .filter((e) => e.medalColor === this.MedalColors.SILVER)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack2
                    .filter((e) => e.medalColor === this.MedalColors.BRONZE)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                  {this.state.searchtrack2
                    .filter((e) => e.medalColor === this.MedalColors.NORMAL)
                    .map((d, index) => (
                      <Row className="mt-4 gcp" key={index}>
                        <RankCard data={d} />
                      </Row>
                    ))}
                </React.Fragment>
              ) : (
                <Skeleton
                  className="mt-3"
                  variant="rect"
                  height={200}
                  style={{ borderRadius: 10 }}
                />
              )}
            </Container>
          </TabPanel>
          <Row className="mb-5" />
        </Container>
      </Toolbar> /*
      <Row className='m-5 text-center'>
           <Col>
           <h3 style={{ color: '#8a3fff'}} className='gcp'>
           Ranking will be displayed Soon.
        </h3>
      </Col>
      </Row>*/
    );
  }
}

export default GCPRank;
