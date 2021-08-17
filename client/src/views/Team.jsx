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
  let spacing="Teamcol space-around";
  if(Members.length<3)spacing="Teamcol space-evenly";
  if(props.core==="Technical"){
    return(<div id={props.core}>
      <h2 className="Cores" >{props.core}</h2>
      <hr/>
       <div className="Teamcol">
      {Members.slice(0,3)}
     </div>
     <div className="Teamcol space-evenly" >
      {Members.slice(3,5)}
     </div>
     </div>);
  }
  return (<div id={props.core}>
     <h2 className="Cores" >{props.core}</h2>
     <hr/>
      <div className={spacing} >
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
      <div className="Team">
        
        <div className='row align-items-center' style={{ zIndex:'2'}}>
          <div className='col-md-6 col-xs-9 offset-1 mt-4'>
            <img
              className='mt-4 ml-4'
              src={process.env.PUBLIC_URL + '/Images/team5.gif'}
              alt='heading_illustration'
              style={{ height: '470px', width: '550px' }}
            />
          </div>
          <div className='col-md-5 col-xs-3'>
            <p style={{ fontSize: '28px',color:'#0000cc',textalign:'center'}}>
              The strength of the team is each<br></br> individual member.
              The strength<br></br> of each member is the team.
            </p>
          </div>
        </div>
        {arrangeCol()}
        <div className="area" >
      <ul className="circles">
              <li><img src="https://img.icons8.com/color/48/000000/flutter.png"/></li>
              <li><img src="https://img.icons8.com/plasticine/100/000000/react.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/angularjs.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/nodejs.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/mongodb.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/tensorflow.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/google-cloud.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/google-cloud-platform.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/django.png"/></li>
              <li><img src="https://img.icons8.com/fluency/48/000000/mysql-logo.png"/></li>
      </ul>
  </div >
      </div>
    );
  }
}
