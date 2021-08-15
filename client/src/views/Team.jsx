import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import { resetFooterStyle, resetNavStyle } from '../utils/utils';
import './CSSFiles/Team.css';
import TeamComponent from '../components/team/team-component';
import { GitHub, LinkedIn } from "@material-ui/icons";
import TeamData from './TeamData.js';
import Karan from '../assets/img/Karan.jpg';
import Dhruvil from '../assets/img/Dhruvil.jpg';

const TeamMember = (props) => {
  return (
      <div className="person" id={props.member.name}>
        <div className="person-badge">
          <img className="normal" src={props.member.imgn}/>
          <img className="peculiar" src={props.member.imgp}/>
        </div>
      <div className="info">
        <h4>{props.member.name}</h4>
      </div>
        <div className="links">
        <a src={props.linkedInLink}><GitHub className="mr-2" style={{ color: "black" }} /></a>
        <a src={props.githubLink} ><LinkedIn className="ml-1" style={{ color: "black" }} /></a>
        </div>
      </div>

  );
};

const ArrangeRow=(props)=>{
  let Members = [];
  for (let member of TeamData[props.core]) {
    member.imgn=member.imgn.Karan;
    member.imgp=member.imgp.Dhruvil;
    Members.push(<TeamMember member={member} key={member.name} core={props.core}/> ); 
  }
  return (<div id={props.core}>
     <h2 className="Cores" >{props.core}</h2>
     <hr/>
      <div className="Teamcol">
     {Members}
    </div>
    </div>
  );
}

const arrangeCol=()=>{
  const Cores = [];
  const temp=Object.keys(TeamData);
  for (let core of temp) {
    Cores.push(<ArrangeRow core={core} key={core}/>);
  }
  
  return (
    <div className="Teamrow">
      <h1 className='Cores'>OUR TEAM</h1>
      {Cores}
    </div>
  );
}
          
export default class Team extends React.Component {
  render() {
    return (
      <div>
        <div className='row align-items-center'>
          <div className='col-6 offset-1 mt-4'>
            <img
              className='mt-4 ml-4'
              src={process.env.PUBLIC_URL + '/Images/firstparallel.jpg'}
              alt='heading_illustration'
              style={{ height: '470px', width: '560px' }}
            />
          </div>
          <div className='col-5'>
            <p style={{ fontSize: '28px' }}>
              We United to be Strong!!
              afdafdsfsafasdfasdfasdfasdf
              asdfasdfsadfsdafdsfdasfasdfs
              sadfsdafdsafadsfasdfdsfdsfdsf
            </p>
          </div>
        </div>
        {arrangeCol()}
      </div>
    );
  }
}
