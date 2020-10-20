import Home from './views/Home';
import Team from './views/Team';
import Events from './views/Events';
import Videos from './views/Videos';
import Projects from './views/Projects';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Movie, People, Today, HomeRounded as HomeIcon, DeveloperBoard} from "@material-ui/icons";
import {faMedium} from '@fortawesome/free-brands-svg-icons'
import gdgBlack from './assets/img/gdg_black.png'
import {Image} from "react-bootstrap";
import GCPRank from "./views/GCPRank";

export const RouteType = {
	LINK: 0,
	PAGE: 1,
	FOOTER: 2
}

const ROUTES = [
	{
		icon: null,
		name: 'GCP Rank',
		path: '/gcp-rank',
		component: GCPRank,
		type: RouteType.PAGE
	},
	{
		icon: <HomeIcon style={{color: 'black'}} />,
		name: 'Home',
		path: '/',
		component: Home,
		type: RouteType.PAGE
	},
	{
		icon: <People style={{color: 'black'}} />,
		name: 'Team',
		path: '/team',
		component: Team,
		type: RouteType.PAGE
	},
	{
		icon: <Today style={{color: 'black'}} />,
		name: 'Events',
		path: '/events',
		component: Events,
		type: RouteType.PAGE
	},
	{
		icon: <Movie style={{color: 'black'}} />,
		name: 'Videos',
		path: '/videos',
		component: Videos,
		type: RouteType.PAGE
	},
	{
		icon: <DeveloperBoard style={{color: 'black'}} />,
		name: 'Projects',
		path: '/projects',
		component: Projects,
		type: RouteType.PAGE
	},
	{
		icon: <FontAwesomeIcon style={{color: 'black', fontSize: 26}} icon={faMedium}/>,
		name: 'Blogs',
		path: 'https://medium.com/@dscmescoe',
		component: null,
		type: RouteType.LINK
	},
	{
		icon: <Image src={gdgBlack} style={{width: '1.5em'}} />,
		name: 'Community Page',
		path: 'https://dsc.community.dev/modern-education-societys-college-of-engineering/',
		component: null,
		type: RouteType.LINK
	},
];

export default ROUTES;
