import Home from './views/Home';
import Team from './views/Team';
import Events from './views/Events';
import Videos from './views/Videos';
import Projects from './views/Projects';

export const RouteType = {
	LINK: 0,
	PAGE: 1,
	FOOTER: 2
}

const ROUTES = [
	{
		name: 'Home',
		path: '/',
		component: Home,
		type: RouteType.PAGE
	},
	{
		name: 'Team',
		path: '/team',
		component: Team,
		type: RouteType.PAGE
	},
	{
		name: 'Events',
		path: '/events',
		component: Events,
		type: RouteType.PAGE
	},
	{
		name: 'Videos',
		path: '/videos',
		component: Videos,
		type: RouteType.PAGE
	},
	{
		name: 'Projects',
		path: '/projects',
		component: Projects,
		type: RouteType.PAGE
	},
	{
		name: 'Blogs',
		path: 'https://medium.com/@dscmescoe',
		component: null,
		type: RouteType.LINK
	},
	{
		name: 'Community Page',
		path: 'https://dsc.community.dev/modern-education-societys-college-of-engineering/',
		component: null,
		type: RouteType.LINK
	},
];

export default ROUTES;
