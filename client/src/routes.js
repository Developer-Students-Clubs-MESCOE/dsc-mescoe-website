import Home from './views/Home';
import Team from './views/Team';
import Events from './views/Events';
import Videos from './views/Videos';
import Projects from './views/Projects';
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
		icon: <FontAwesomeIcon style={{ color: 'black', fontSize: 26 }} icon={faMedium} />,
		name: 'Blogs',
		path: 'https://medium.com/@dscmescoe',
		component: null,
		type: RouteType.LINK
	},
	{
		icon: <Image src={gdgBlack} style={{ width: '1.5em' }} />,
		name: 'Community Page',
		path: 'https://dsc.community.dev/modern-education-societys-college-of-engineering/',
		component: null,
		type: RouteType.LINK
	},
	{
		icon: null,
		name: 'Android Study Jam',
		path: '/android-session-1',
		component: (
			<Redirect
				path="android-session-1"
				url="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzVhNTliOGQtMTkxZi00ZjgwLWIwN2UtZmI1YTk2M2NhZjA4%40thread.v2/0?context=%7b%22Tid%22%3a%22a3d598b6-6092-4351-b1a3-b213e8adc03b%22%2c%22Oid%22%3a%22661f07ac-f916-4ef3-a486-c25860d7f28e%22%7d"
			/>
		),
		type: RouteType.PAGE
	}
];

export default ROUTES;
