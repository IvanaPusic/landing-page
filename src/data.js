import communityIcon from './assets/community-icon.svg';
import educationIcon from './assets/education-icon.svg';
import groupIcon from './assets/group-icon.svg';
import hackatonsIcon from './assets/hackatons-icon.svg';

const links = [
  {
    id: 1,
    link: '/#home',
    linkName: 'Home',
  },
  {
    id: 2,
    link: '/#certifications',
    linkName: 'Certifications',
  },
  {
    id: 3,
    link: '/#certifications',
    linkName: 'Grants',
  },
  {
    id: 4,
    link: '/#events',
    linkName: 'Events',
  },
  {
    id: 5,
    link: '/#news',
    linkName: 'News',
  },
  {
    id: 6,
    link: '/#contacts',
    linkName: 'Contacts',
  },
];

export const cardInfo = [
  {
    id: 1,
    image: educationIcon,
    title: 'Education & Certification',
    info: 'Whether you’re a developer, a tech enthusiast, an entrepreneur looking to make the jump from web2 to web3, or simply curious about NEAR technology, the NEAR Balkans Education Program has got you covered.',
    buttonText: 'Start now',
  },
  {
    id: 2,
    image: groupIcon,
    title: 'Meet-Ups',
    info: 'NEAR Balkans hub organises #NEARby meet different cities in the Balkans region. This is a great opportunity to meet other community members, and get more involved in the regional hub!',
    buttonText: 'Attend',
  },
  {
    id: 3,
    image: hackatonsIcon,
    title: 'Hackatons',
    info: '  There will be a series of online and offline hackathons organized by the NEAR Balkans hub in the coming months. Follow the updates & get ready to build and get rewarded, Balkans developer community!',
    buttonText: 'Stay-up-to-date',
  },
  {
    id: 4,
    image: communityIcon,
    title: 'Community Empowerment',
    info: ' NEAR empowers millions to invent and explore new experiences. Get in, connect, learn & build!',
    buttonText: 'Read More',
  },
];

export const goalsInfo = [
  {
    id: 1,
    text: ' Educate the community and demonstrate the potential of web 3 for development across the Balkan region through a series of meetups,hackathons, university partnerships, and much more.',
  },
  {
    id: 2,
    text: 'Facilitate innovation and help project development within the NEAR Ecosystem through partnerships with teams, companies and organizations across Balkan.',
  },
  {
    id: 3,
    text: 'Facilitate innovation and help project development within the NEAR Ecosystem through partnerships with teams, companies and organizations across Balkan.',
  },
  {
    id: 4,
    text: 'Certified Education programs and internships.',
  },
];
export default links;
