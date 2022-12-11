import { Toolbar } from "@material-ui/core";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { resetFooterStyle, resetNavStyle, serverURL } from "../utils/utils";
import axios from "axios";
import VideoCard from "../components/video/VideoCard";
import { Skeleton } from "@material-ui/lab";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          _id: { $oid: "5f6c184c1036f71a20512d29" },
          name: "Developer Student Clubs | Modern Education Society's College of Engineering | 2019-2020",
          url: "https://www.youtube.com/watch?v=2QUs0jgDAD8",
          description:
            "Official highlights of DSC Modern Education Society's College of Engineering 2019-2020 edition. ",
          date: { $date: { $numberLong: "1600919628576" } },
          __v: { $numberInt: "0" },
        },
        {
          _id: { $oid: "5f6c19161036f71a20512d2b" },
          name: "Quantum Computing and Future - by Akash Sureka",
          url: "https://www.youtube.com/watch?v=p5JgiMII0Go",
          description:
            "Akash Sureka, a serial entrepreneur with successful exit to a public company.",
          date: { $date: { $numberLong: "1600919830800" } },
          __v: { $numberInt: "0" },
        },
        {
          _id: { $oid: "5f6c19501036f71a20512d2c" },
          name: "Google Developer Student Clubs Solution Challenge 2020 || ChecXray Flutter App",
          url: "https://www.youtube.com/watch?v=NibhQZ93nfM",
          description:
            "A flutter app to detect COVID-19 disease using chest radiographs.",
          date: { $date: { $numberLong: "1600919888442" } },
          __v: { $numberInt: "0" },
        },
        {
          _id: { $oid: "5f6c19a01036f71a20512d2d" },
          name: "Pie & AI : Part I Introduction to Neural Nets",
          url: "https://www.youtube.com/watch?v=QUuqkUPCAtU",
          description:
            "Willing to start your Deep learning career? Or you're an entrepreneur planning to use AI in your business.",
          date: { $date: { $numberLong: "1600919968330" } },
          __v: { $numberInt: "0" },
        },
        {
          _id: { $oid: "5f6c19d21036f71a20512d2e" },
          name: "Pie & AI : Part I Introduction to Neural Nets",
          url: "https://www.youtube.com/watch?v=dXPfhYEFwLs",
          description:
            "We @DSC MESCOE bring you a series of online events in collaboration with deeplearning.ai to strengthen your knowledge of Deep learning. ",
          date: { $date: { $numberLong: "1600920018732" } },
          __v: { $numberInt: "0" },
        },
        {
          _id: { $oid: "5f6c19f21036f71a20512d2f" },
          name: "DSC MESCOE 2020 | Teaser",
          url: "https://www.youtube.com/watch?v=-xzN9o5PoAo",
          description:
            "Stay tuned for great events where you can learn, interact with experts, grow your skill set and even win exciting prizes! Fantastic opportunities your way!",
          date: { $date: { $numberLong: "1600920050181" } },
          __v: { $numberInt: "0" },
        },
        {
          _id: { $oid: "5fb7a39d45e80f0ce882077c" },
          name: "Introduction to #WebXR with Ayşegül Yönet",
          url: "https://www.youtube.com/watch?v=Q-s6eFPv4QM",
          description: "WebXR Session for Beginners",
          date: { $date: { $numberLong: "1605890265567" } },
        },
        {
          _id: { $oid: "5fe34a0d484ab300177dab9c" },
          name: "Android Study Jam - Session 1 | DSC MESCOE",
          url: "https://www.youtube.com/watch?v=AsQGjeB-TQ0",
          description:
            "Learn the basics of Kotlin programming language taught by DSC MESCOE’s Android Facilitator, Laukik Chavan. Follow along as Laukik Chavan demonstrates the fundamentals on the online Kotlin playground!",
          date: { $date: { $numberLong: "1608731149385" } },
          __v: { $numberInt: "0" },
        },
      ],
    };
  }

  componentDidMount() {
    document.title = "Videos - GDSC MESCOE";
    resetNavStyle({ page: "Videos" });

    axios
      .get(`${serverURL}/api/videos`)
      .then((res) => {
        this.setState({ videos: res.data });
      })
      .catch((err) => console.error(err.message));
  }

  render() {
    const footer = document.querySelector("#contact");
    if (footer) {
      resetFooterStyle();
    }
    return (
      <Toolbar className="grid" style={{ minHeight: "100vh" }}>
        <Container>
          <h3
            className="mt-5 video"
            style={{ color: "#EA4435", fontWeight: 600 }}
          >
            Videos
          </h3>
          <Row className="ml-3">
            {this.state.videos.length
              ? this.state.videos.map((video, index) => (
                  <Col
                    xs="12"
                    key={index}
                    className="p-0 pr-4 mt-5 video"
                    md="6"
                    lg="4"
                  >
                    <VideoCard video={video} />
                  </Col>
                ))
              : [0, 1, 2].map((s, index) => (
                  <Col
                    key={index}
                    className="p-0 pr-4 mt-5"
                    xs="12"
                    md="6"
                    lg="4"
                  >
                    <Skeleton
                      variant="rect"
                      height={300}
                      style={{ borderRadius: 10 }}
                    />
                  </Col>
                ))}
          </Row>
          <Row className="mb-5" />
          <Row className="mb-5 " />
        </Container>
      </Toolbar>
    );
  }
}
