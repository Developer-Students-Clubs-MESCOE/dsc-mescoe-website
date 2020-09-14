import Home from './views/Home';
import Team from './views/Team';
import Events from './views/Events';
import Videos from './views/Videos';
import Projects from './views/Projects';

const ROUTES = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'Team',
		path: '/team',
		component: Team
	},
	{
		name: 'Events',
		path: '/events',
		component: Events
	},
	{
		name: 'Videos',
		path: '/videos',
		component: Videos
	},
	{
		name: 'Projects',
		path: '/projects',
		component: Projects
	},
	{
		name: 'Blogs',
		path: '#blogs',
		component: null
	},
	{
		name: 'Contact Us',
		path: '#contact',
		component: null
	}
];

export default ROUTES;
