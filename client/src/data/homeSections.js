import teamImage from "../assets/img/team.webp";
import gcpImage from "../assets/img/gcp.png";

let homeSections = [
  {
    title: "30 Days of Google Cloud",
    content: ["Checkout where you stand amongst other DSC Members in the race to complete quests on Qwiklabs!"],
    button: {
      text: 'Show Ranks',
      textColor: '#fff',
      backgroundColor: '#8a3fff',
      isLink: true,
      href: "/#/gcp-rank"
    },
    image: gcpImage,
    cards: [],
    videos: [],
  },
  {
    title: 'Get to know the team',
    content: ["We’ve got a set of minds, that will blow your mind, teaching you, all sorts of stuff in the world of development.",
      "P.S. They love caffeine too!"],
    button: {
      text: 'The Team',
      textColor: '#fff',
      backgroundColor: '#4385F4',
      isLink: true,
      href: "/#/team"
    },
    image: teamImage,
    cards: [],
    videos: [],
  },
  {
    title: 'Featured Events',
    content: ["Here are some of our events."],
    button: {
      text: 'View Events',
      textColor: '#000',
      backgroundColor: '#FBBD04',
      isLink: true,
      href: "/#/events"
    },
    image: null,
    cards: [],
    videos: [],
  },
  {
    title: 'Videos',
    content: ["Some videos for your viewing pleasure."],
    button: {
      text: 'More Videos',
      textColor: '#fff',
      backgroundColor: '#EA4435',
      isLink: true,
      href: "/#/videos"
    },
    image: null,
    cards: [],
    videos: [],
  },
  {
    title: 'Featured Projects',
    content: ["We're so very proud of our community! Take a look at these awesome projects."],
    button: {
      text: 'View Projects',
      textColor: '#fff',
      backgroundColor: '#34A852',
      isLink: true,
      href: "/#/projects"
    },
    image: null,
    cards: [],
    videos: [],
  },
]

export default homeSections