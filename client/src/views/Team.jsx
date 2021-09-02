import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import { resetFooterStyle, resetNavStyle } from '../utils/utils';
import './CSSFiles/Team.css';
import TeamComponent from '../components/team/team-component';
import { Link } from 'react-router-dom'
import { GitHub, LinkedIn } from "@material-ui/icons";
import TeamData from './TeamData.js';

const TeamMember = (props) => {
  
  return (<div className='person' id={props.member.name}>
      <div className='person-badge'>
        <img
          className='normal'
          src={process.env.PUBLIC_URL + props.member.imagen}
        />
        <img
          className='peculiar'
          src={process.env.PUBLIC_URL + props.member.imagep}
        />
        {console.log(props.member.imagen)}
      </div>
      <div className='info'>
        <h4>{props.member.name}</h4>
      </div>
        <div className="links">
        <a href={props.member.githubLink} target="blank"><GitHub className="mr-2" style={{ color: "black" }} /></a>
        <a href={props.member.linkedInLink} target="blank"><LinkedIn className="ml-1" style={{ color: "black" }} /></a>
        </div>
      </div>
  );
};

const ArrangeRow = (props) => {
  let Members = [];
  for (let member of TeamData[props.core]) {
    Members.push(<TeamMember member={member} key={member.name} core={props.core}/> ); 
  }
  let spacing = 'Teamcol space-around';
  if (Members.length < 3) spacing = 'Teamcol space-evenly';
  if (props.core === 'Technical') {
    return (
      <div id={props.core}>
        <h2 className='Cores'>{props.core}</h2>

        <div className='Teamcol'>{Members.slice(0, 3)}</div>
        <hr></hr>
        <div className='Teamcol space-evenly'>{Members.slice(3, 5)}</div>
        <hr></hr>
      </div>
    );
  }
  return (
    <div id={props.core}>
      <h2 className='Cores'>{props.core}</h2>
      <div className={spacing}>{Members}</div>
      <hr></hr>
    </div>
  );
};

const arrangeCol = () => {
  const Cores = [];
  const temp = Object.keys(TeamData);
  for (let core of temp) {
    Cores.push(<ArrangeRow core={core} key={core} />);
  }

  return (
    <div>
      <div className='Teamrow'>
        <h1 className='Cores'>OUR TEAM</h1>
        <div>{Cores}</div>
        <center>
          <Link to='/team2020'>
            <button
              type='button'
              className='btn btn-dark'>
              <h4>Team 2020</h4>
            </button>
          </Link>
        </center>
      </div>
    </div>
  );
};
const goToTeam = () => {
  window.scroll(0, 700);
};
export default class Team extends React.Component {
  componentDidMount() {
    document.title = "Team - GDSC MESCOE";
     window.scrollTo(0, 0)
    resetNavStyle({page: "Team"});
    if (JSON.parse(localStorage.getItem('isDarkMode'))) {
      document.querySelectorAll('.team').forEach(e => {
        e.classList.toggle('dark-mode')
      })
    }
  }
  render() {
    return (
      <div className='header-demo'>
        <div className='flex-container'>
          <div className='flex-item-left'>
            <img
              className='mt-4 ml-4 img-fluid'
              src={process.env.PUBLIC_URL + '/Images/team6.jpg'}
              alt='heading_illustration'
            />
          </div>
          <div className='flex-item-right'>
            <p>
              The strength of the team is each<br></br> individual member. The
              strength<br></br> of each member is the team.
            </p>
            <div onClick={goToTeam}>
              <center>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  fill='black'
                  class='bi bi-arrow-down'
                  viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                  />
                </svg>
              </center>
            </div>
            <div className='flex-button'></div>
          </div>
        </div>
        {arrangeCol()}
        <div className='area'>
          <ul className='circles'>
            <li>
              <img src='https://img.icons8.com/color/48/000000/flutter.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/plasticine/100/000000/react.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/angularjs.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/nodejs.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/mongodb.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/tensorflow.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/google-cloud.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/google-cloud-platform.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/color/48/000000/django.png' />
            </li>
            <li>
              <img src='https://img.icons8.com/fluency/48/000000/mysql-logo.png' />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
