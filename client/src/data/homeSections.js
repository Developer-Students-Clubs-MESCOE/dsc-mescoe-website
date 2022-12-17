import teamImage from "../assets/img/new4.gif";

let homeSections = [
  {
    title: "Get to know the team",
    content: [
      "We’ve got a set of minds, that will blow your mind, teaching you, all sorts of stuff in the world of development.",
      "P.S. They love caffeine too!",
    ],
    button: {
      text: "The Team",
      textColor: "#fff",
      backgroundColor: "#8a3fff",
      isLink: true,
      href: "/#/team",
    },
    image: teamImage,
    cards: [],
    videos: [],
  },
  {
    title: "Featured Events",
    content: ["Here are some of our events."],
    button: {
      text: "View Events",
      textColor: "#000",
      backgroundColor: "#FBBD04",
      isLink: true,
      href: "/#/events",
    },
    image: null,
    cards: [{"_id":{"$oid":"5f69d83827a08999ee60b23b"},"image":"https://cdn.discordapp.com/attachments/758539559725301791/759672161358315560/info-thumbnail.jpg","title":"Introduction Session DSC MESCOE","content":["Join us live in the Virtual Info Session to know all about DSC MESCOE and how it will help you gain insights in the world of technology - through code labs, study jams, hands-on workshops, project building activities and much more!","Come meet the team and other members of DSC! ","See you there!"],"dateTime":{"$numberDouble":"1.6011846000000E+12"},"location":"Microsoft Teams","onlineLocation":true,"duration":"1:00","registrationLink":"http://bit.ly/Info-Register","upcoming":false},{"_id":{"$oid":"5f787e38c81a9c8b47f08bd4"},"image":"https://cdn.discordapp.com/attachments/758539559725301791/761981420537118721/google-cloud-poster.jpg","title":"30 Days of Google Cloud - Kickstarter","content":["Join us as we kickstart the 30 Days of Google Cloud program.️"," You will learn what Google Cloud Platform is and how this program will help you. Also, get hands-on experience in real cloud environments provided by Qwiklabs ","See you there!"],"dateTime":{"$numberDouble":"1.6018074000000E+12"},"location":"Microsoft Teams","onlineLocation":true,"duration":"1:00","registrationLink":"https://dsc.community.dev/events/details/developer-student-clubs-modern-education-societys-college-of-engineering-presents-kickstarter-30-days-of-google-cloud/#/","upcoming":false}, {"_id":{"$oid":"5f82ece8e1bc1c6b2da70d51"},"image":"https://cdn.discordapp.com/attachments/758539559725301791/764810278658375721/Screenshot_2020-10-11_at_4.51.26_PM_1.png","title":"Hacktoberfest Pune in association with DSC PVGCOET","content":["HacktoberFest, by DigitalOcean in partnership with Dev & Intel, is a month-long celebration of open source software where contributions such as adding a feature, fixing bugs, etc are all welcome."],"dateTime":{"$numberDouble":"1.6023672000000E+12"},"location":"YouTube Livestream","onlineLocation":true,"duration":"3:30","registrationLink":"https://organize.mlh.io/participants/events/4670-hacktoberfestpune","upcoming":false}],
    videos: [],
  },
  {
    title: "Videos",
    content: ["Some videos for your viewing pleasure."],
    button: {
      text: "More Videos",
      textColor: "#fff",
      backgroundColor: "#EA4435",
      isLink: true,
      href: "/#/videos",
    },
    image: null,
    cards: [],
    videos: [
      {
        _id: { $oid: "5f6c184c1036f71a20512d29" },
        name: "Developer Student Clubs | Modern Education Society's College of Engineering | 2019-2020",
        url: "https://www.youtube.com/watch?v=2QUs0jgDAD8",
        description:
          "Official highlights of DSC Modern Education Society's College of Engineering 2019-2020 edition. ",
        date: { $date: { $numberLong: "1600919628576" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "5fb7a27f45e80f0ce882077b" },
        name: "HacktoberFestPune - DSC MESCOE x DSC PVGCOET",
        url: "https://www.youtube.com/watch?v=_EXAftql0Xg",
        description: "HacktoberFestPune 2020 Pune Edition",
        date: { $date: { $numberLong: "1605890085617" } },
      },
      {
        _id: { $oid: "5f6c19501036f71a20512d2c" },
        name: "Google Developer Student Clubs Solution Challenge 2020 || ChecXray Flutter App",
        url: "https://www.youtube.com/watch?v=NibhQZ93nfM",
        description:
          "A flutter app to detect COVID-19 disease using chest radiographs.",
        date: { $date: { $numberLong: "1600919888442" } },
        __v: { $numberInt: "0" },
      },
    ],
  },
  {
    title: "Featured Projects",
    content: [
      "We're so very proud of our community! Take a look at these awesome projects.",
    ],
    button: {
      text: "View Projects",
      textColor: "#fff",
      backgroundColor: "#34A852",
      isLink: true,
      href: "/#/projects",
    },
    image: null,
    cards: [
      {
        _id: { $oid: "5f6c1c9c1036f71a20512d30" },
        title: "ChecXray",
        __v: { $numberInt: "0" },
        date: { $date: { $numberLong: "1600920732487" } },
        description:
          "A flutter app to detect Covid-19 disease using chest radiographs.",
        github: "https://github.com/Parag0506/ChecXray",
        image:
          "https://cdn.discordapp.com/attachments/758539559725301791/758541162561798154/maxresdefault.png",
        youtube: "https://youtube.com/watch?v=NibhQZ93nfM",
      },
      {
        _id: { $oid: "5fdae4cd21b5cb5ddc5b659e" },
        title: "Battery Safety Alertz",
        __v: { $numberInt: "0" },
        date: { $date: { $numberLong: "1608180633000" } },
        description:
          "Get your best shot of safety in emergency situations. When the auto alert feature is turned on, your location along with a message will be automatically shared with your trusted contacts if your device is in about to die situation.",
        github: "https://github.com/Rehan2156/DSCWOW_Personal-Safety-Alertz",
        image:
          "https://cdn.discordapp.com/attachments/776295965254352936/788992482149924864/Screenshot_2020-12-17_at_10.23.43_AM.png",
        youtube:
          "https://www.youtube.com/watch?v=roNMDbMrnm0&ab_channel=RehanShaikh",
      },
      {
        _id: { $oid: "5fdb0f5d497fc5603f51ae85" },
        title: "Face To BMI",
        date: { $date: { $numberLong: "1608191821000" } },
        description:
          "Many people dont know how to calculate BMI or either find it too boring to calculate their BMI and thus don't know whether they themselves are healthy or not. Many health problems arise if a person is obese so if a person can estimate their BMI by just uploading their photo, they will be able to know about their health conditions and focus on improving their health.",
        github: "https://github.com/HritNan/CodeOFFDuty",
        image:
          "https://cdn.discordapp.com/attachments/758539559725301791/789037738548133888/facetobmi.jpeg",
        youtube: "https://youtu.be/3d8kr5o_RJA",
      },
    ],
    videos: [],
  },
];

export default homeSections;
