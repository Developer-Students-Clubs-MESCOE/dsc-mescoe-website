import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./team-component.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex flex-column",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(22),
    height: theme.spacing(22)
  }
}));

const TeamComponent = ({ imgUrl, name, role, gitHublink, linkedInLink }) => {
  const classes = useStyles();
  return (
    <div className="main-div">
      <div className={`${classes.root} team-info`}>
        <div className="team-img">
          <Avatar
            className={`${classes.large} shadow-lg`}
            alt="team-img"
            src={imgUrl}
          />
        </div>
        <div className="d-flex flex-column team-cred team">
          <span
            className="text-center font-weight-light"
            style={{ fontSize: "18px" }}
          >
            {name}
          </span>
          <span
            className="text-center font-weight-bold"
            style={{ fontSize: "18px" }}
          >
            {role}
          </span>
        </div>
      </div>
      <div className="team-links">
        <a href={gitHublink} target="blank">
          <GitHub className="mr-2" style={{ color: "white" }} />
        </a>
        <a href={linkedInLink} target="blank">
          <LinkedIn className="ml-1" style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
};

export default TeamComponent;
