import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import { resetFooterStyle, resetNavStyle } from '../utils/utils';
import './CSSFiles/Team.css';
import TeamComponent from '../components/team/team-component';
import TeamData from './TeamData.js';
import Karan from '../assets/img/Karan.jpg';
import Dhruvil from '../assets/img/Dhruvil.jpg';
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
        <div className='container'>
          {TeamData.map((item, index) =>
            item.map((member, subindex) => (
              <div className={member.classname1}>
                <div className={member.classname}>
                  <img className='normal' src={member.imgn.Karan} />
                  <img className='peculiar' src={member.imgp.Dhruvil} />
                </div>
                <div className='info'>
                  <h4>{member.name}</h4>
                  <h5>{member.role}</h5>
                </div>
                <div className='links'>
                  <p>😄</p>
                  <p>😄</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
