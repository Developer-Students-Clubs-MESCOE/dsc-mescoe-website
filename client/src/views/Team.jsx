import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import { resetFooterStyle, resetNavStyle } from '../utils/utils';
import './CSSFiles/Team.css';
import TeamComponent from '../components/team/team-component';
import TeamData from './TeamData.js';
import Karan from '../assets/img/Karan.jpg';
import Dhruvil from '../assets/img/Dhruvil.jpg';
const TeamMember = (member) => {
  return (
    <div className="person">
  <div className="person-badge">
        <img className="normal" src={member.imgn.Karan}/>
        <img className="peculiar" src={member.imgp.Dhruvil}/>
  </div>
  <div className="info">
    <h4>Vaibhav Bhapkar</h4>
    <h5>Lead</h5>
  </div>
  <div className="links">
    <p>😄</p>
    <p>😄</p>
  </div>
</div>
  );
};

          
export default class Team extends React.Component {
  
  render() {
    return (
      <div>
        <div className='col-md-6'></div>
        {TeamMember(TeamData[0][0])}
      </div>
    );
  }
}
