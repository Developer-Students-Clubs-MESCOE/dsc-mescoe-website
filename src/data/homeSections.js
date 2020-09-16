import teamImage from "../assets/img/team.webp";
import location from "../assets/img/location.svg";
import event from "../assets/img/event.svg";
// import mediumLogo from "../assets/img/medium.png";

const homeSections = [
  {
    title: 'Get to know the team',
    content: ["We’ve got a brilliant set of minds, that will blow your mind, teaching you, all sorts of stuff in the world of development.",
      "P.S. They love caffeine too!"],
    button: {
      text: 'The Team',
      textColor: '#fff',
      backgroundColor: '#4385F4',
      isLink: true,
      href: "/team"
    },
    image: teamImage,
    cards: null,
    videos: null,
  },
  {
    title: 'Featured Events',
    content: ["Here are some of our recent events."],
    button: {
      text: 'View Events',
      textColor: '#fff',
      backgroundColor: '#FBBD04',
      isLink: true,
      href: "/events"
    },
    image: null,
    cards: [
      {
        image: "https://flutter.dev/images/flutter-logo-sharing.png",
        content: ["This is the longest possible event name in the history of event names"],
        actions: [{icon: location, text: "Event Location"}, {icon: event, text: "Aug 1"}],
      },
      {
        image: "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
        content: ["This is the longest possible event name in the history of event names"],
        actions: [{icon: location, text: "Event Location"}, {icon: event, text: "Aug 2"}],
      },
      {
        image: "https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098155260-OD3QNLD1RK7DGPWMCUA6/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w",
        content: ["This is the longest possible event name in the history of event names"],
        actions: [{icon: location, text: "Event Location"}, {icon: event, text: "Aug 3"}],
      }
    ],
    videos: null,
  },
  {
    title: 'Videos',
    content: ["Some videos for your viewing pleasure."],
    button: {
      text: 'More Videos',
      textColor: '#fff',
      backgroundColor: '#EA4435',
      isLink: true,
      href: "/videos"
    },
    image: null,
    cards: null,
    videos: ["https://www.youtube.com/watch?v=QUuqkUPCAtU", "https://www.youtube.com/watch?v=NibhQZ93nfM", "https://www.youtube.com/watch?v=2QUs0jgDAD8"],
  },
  {
    title: 'Featured Projects',
    content: ["So very proud of our community! Take a look at these awesome projects."],
    button: {
      text: 'View Projects',
      textColor: '#fff',
      backgroundColor: '#34A852',
      isLink: true,
      href: "/projects"
    },
    image: null,
    cards: [
      {
        image: "https://mk0analyticsindf35n9.kinstacdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
        content: ["The longest ever project name possible but 2 lines only."],
        actions: null,
      },
      {
        image: "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
        content: ["The longest ever project name possible but 2 lines only."],
        actions: null,
      },
      {
        image: "https://files.realpython.com/media/13-Python-Projects-for-Intermediate-Developers_Watermarked.bb98d44bdb10.jpg",
        content: ["The longest ever project name possible but 2 lines only."],
        actions: null,
      }
    ],
    videos: null,
  },
  // {
  //   title: 'Blogs',
  //   content: ["Check out our Medium page for cool and nifty tips and tricks, tutorials and articles about design and development."],
  //   button: {
  //     text: 'Go To Page',
  //     textColor: '#fff',
  //     backgroundColor: '#242424',
  //     isLink: false,
  //     href: "https://medium.com/"
  //   },
  //   id: "blogs",
  //   image: mediumLogo,
  //   cards: null,
  //   videos: null,
  // },
]

export default homeSections