import Home from './views/Home';
import Team from './views/Team';
import Events from './views/Events';
import Videos from './views/Videos';
import Projects from './views/Projects';
import Team2020 from './views/Team2020';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Movie, People, Today, HomeRounded as HomeIcon, DeveloperBoard } from '@material-ui/icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import gdgBlack from './assets/img/gdg_black.png';
import { Image } from 'react-bootstrap';


export const RouteType = {
	LINK: 0,
	PAGE: 1,
	FOOTER: 2
};

class Redirect extends React.Component {
	componentDidMount() {
		if (window.location.href.includes(this.props.path)) window.location.replace(this.props.url);
	}
	render = () => <React.Fragment />;
}

const ROUTES = [
  {
    icon: <HomeIcon style={{ color: 'black' }} />,
    name: 'Home',
    path: '/',
    component: <Home />,
    type: RouteType.PAGE
  },
  {
    icon: <People style={{ color: 'black' }} />,
    name: 'Team',
    path: '/team',
    component: <Team />,
    type: RouteType.PAGE
  },
  {
    icon: <Today style={{ color: 'black' }} />,
    name: 'Events',
    path: '/events',
    component: <Events />,
    type: RouteType.PAGE
  },
  {
    icon: <Movie style={{ color: 'black' }} />,
    name: 'Videos',
    path: '/videos',
    component: <Videos />,
    type: RouteType.PAGE
  },
  {
    icon: <DeveloperBoard style={{ color: 'black' }} />,
    name: 'Projects',
    path: '/projects',
    component: <Projects />,
    type: RouteType.PAGE
  },
  {
    icon: (
      <FontAwesomeIcon
        style={{ color: 'black', fontSize: 26 }}
        icon={faMedium}
      />
    ),
    name: 'Blogs',
    path: 'https://medium.com/@dscmescoe',
    component: null,
    type: RouteType.LINK
  },
  {
    icon: <Image src={gdgBlack} style={{ width: '1.5em' }} />,
    name: 'Community Page',
    path: 'https://gdsc.community.dev/modern-education-societys-college-of-engineering-pune/',
    component: null,
    type: RouteType.LINK
  },
  {
    icon: null,
    name: 'Web Dev Heist Submission',
    path: '/webdevheist-submission',
    component: (
      <Redirect
        path='webdevheist-submission'
        url='https://docs.google.com/forms/d/e/1FAIpQLSe7HaoN8gAUM7hvEvxWxljeE7fAMYCqsl1pOdZQpLwi2SXhSQ/viewform?usp=sf_link'
      />
    ),
    type: RouteType.PAGE
  },
  {
    icon: null,
    name: 'Web Dev Heist Submission',
    path: '/webdevheist-submission',
    component: (
      <Redirect
        path='webdevheist-submission'
        url='https://docs.google.com/forms/d/e/1FAIpQLSe7HaoN8gAUM7hvEvxWxljeE7fAMYCqsl1pOdZQpLwi2SXhSQ/viewform?usp=sf_link'
      />
    ),
    type: RouteType.PAGE
  },
  {
    icon: null,
    name: 'Team2020',
    path: '/team2020',
    component: <Team2020/>,
    type: RouteType.PAGE
  }
];

export default ROUTES;
