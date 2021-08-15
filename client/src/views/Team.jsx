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
    <img className="normal" src='{% static "resources/images/p1-removebg-preview.png" %}'/>
    <img className="peculiar" src='{% static "resources/images/p2-removebg-preview.png" %}'/>
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
function func(){
          for (let i of TeamData) {
            for (let j of i) {
               TeamMember(j) 
            }
  }
}
          
export default class Team extends React.Component {
  
  render() {
    return (
      <div>
        <div className='col-md-6'></div>
        {func()}
      </div>
    );
  }
}
