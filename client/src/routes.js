import Home from './views/Home';
import Team from './views/Team';
import Events from './views/Events';
import Videos from './views/Videos';
import Projects from './views/Projects';
import Team2020 from './views/Team2020';
import Team2021 from './views/Team2021';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Movie, People, Today, HomeRounded as HomeIcon, DeveloperBoard } from '@material-ui/icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import gdgBlack from './assets/img/gdg_black.png';
import { Image } from 'react-bootstrap';
import GCPRank from './views/GCPRank';
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
    icon: <HomeIcon style={{ color: 'var(--black)' }} />,
    name: 'Home',
    path: '/',
    component: <Home />,
    type: RouteType.PAGE,
  },
  {
    icon: <People style={{ color: 'var(--black)' }} />,
    name: 'Team',
    path: '/team',
    component: <Team />,
    type: RouteType.PAGE,
  },
  // {
  //   icon: <Today style={{ color: 'var(--black)' }} />,
  //   name: 'Events',
  //   path: '/events',
  //   component: <Events />,
  //   type: RouteType.PAGE,
  // },
  {
    icon: <Movie style={{ color: 'var(--black)' }} />,
    name: 'Videos',
    path: '/videos',
    component: <Videos />,
    type: RouteType.PAGE,
  },
  {
    icon: <DeveloperBoard style={{ color: 'var(--black)' }} />,
    name: 'Projects',
    path: '/projects',
    component: <Projects />,
    type: RouteType.PAGE,
  },
  {
    icon: <DeveloperBoard style={{ color: 'var(--black)' }} />,
    name: 'GCPRank',
    path: '/GCPRank',
    component: <GCPRank />,
    type: RouteType.PAGE,
  },
  {
    icon: (
      <FontAwesomeIcon
        style={{ color: 'var(--black)', fontSize: 26 }}
        icon={faMedium}
      />
    ),
    name: 'Blogs',
    path: 'https://medium.com/@dscmescoe',
    component: null,
    type: RouteType.LINK,
  },
  {
    icon: <Image src={gdgBlack} style={{ width: '1.5em' }} />,
    name: 'Community Page',
    path: 'https://gdsc.community.dev/modern-education-societys-college-of-engineering-pune/',
    component: null,
    type: RouteType.LINK,
  },
  {
    icon: null,
    name: 'Hacktoberfest',
    path: '/hacktoberfest',
    component: (
      <Redirect
        path='/hacktoberfest'
        url='https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_OGY4ZDBhMWMtYmJiMi00ODVmLWJhNWMtNDk3YjRlMmRhZjA1%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25223a3cd3f3-9917-40dc-91e0-85146eaf5d55%2522%252c%2522Oid%2522%253a%25227c041bd0-f19d-4bf9-897f-497793409f05%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=8711275e-1ea5-478c-8f5e-44f8c06e3f6b&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true'
      />
    ),
    type: RouteType.PAGE,
  },
  {
    icon: null,
    name: 'AIMLOnAzureRegistration',
    path: '/AIMLOnAzureRegistration',
    component: (
      <Redirect
        path='/AIMLOnAzureRegistration'
        url='https://gdsc.community.dev/events/details/developer-student-clubs-modern-education-societys-college-of-engineering-pune-presents-getting-started-on-ai-ml-with-azure/'
      />
    ),
    type: RouteType.PAGE,
  },

  {
    icon: null,
    name: 'Skill-Up-CP',
    path: '/Skill-Up-CP',
    component: (
      <Redirect
        path='/Skill-Up-CP'
        url='https://teams.microsoft.com/l/meetup-join/19%3Ameeting_MmM5MjExNjUtNjIyMi00N2I5LThiZTYtODRlYjY5MWVkOTk1%40thread.v2/0?context=%7B%22Tid%22%3A%22a3d598b6-6092-4351-b1a3-b213e8adc03b%22%2C%22Oid%22%3A%22ab9aed67-eff7-4975-834b-3f5bd7e7796a%22%2C%22MessageId%22%3A%220%22%7D'
      />
    ),
    type: RouteType.PAGE,
  },

  {
    icon: null,
    name: 'Team2020',
    path: '/team2020',
    component: <Team2020 />,
    type: RouteType.PAGE,
  },
  {
    icon: null,
    name: 'Team2021',
    path: '/team2021',
    component: <Team2021/>,
    type: RouteType.PAGE,
  }
];

export default ROUTES;
