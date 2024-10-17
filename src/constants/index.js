import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/", // Link to Home page
  },
  {
    id: "portfolio",
    title: "Portfolio",
    link: "/portfolio", // Link to Portfolio page
  },
  {
    id: "about",
    title: "About",
    link: "/about", // Link to About page
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact", // Link to Contact page
  },
  
 
];


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Advanced Surveillance",
    content:
      "Our state-of-the-art surveillance systems provide comprehensive monitoring, ensuring round-the-clock security for your premises.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We implement advanced encryption and security protocols to ensure your systems and data remain protected at all times.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Remote Monitoring",
    content:
      "With our remote monitoring solutions, you can access and control your security systems from anywhere, providing real-time updates and peace of mind.",
  },
];


export const feedback = [
  {
    id: "feedback-1",
    content:
      "The security solutions provided by Mega Technologies transformed our business operations. Their team is professional and responsive.",
    name: "Rahul Sharma",
    title: "Business Owner, Tech Innovations",
    img: 'https://thumb.ac-illust.com/33/33379f4342b6b3678554007c66977d5d_t.jpeg',
  },
  {
    id: "feedback-2",
    content:
      "I was impressed by the quick implementation of their security systems. Mega Technologies truly cares about their clients.",
    name: "Priya Verma",
    title: "Manager, Secure Solutions Pvt. Ltd.",
    img: 'https://thumb.ac-illust.com/33/33379f4342b6b3678554007c66977d5d_t.jpeg',
  },
  {
    id: "feedback-3",
    content:
      "Mega Technologies has set a new standard in security. Their products are reliable and easy to use.",
    name: "Amit Singh",
    title: "CTO, Digital Shield",
    img: 'https://thumb.ac-illust.com/33/33379f4342b6b3678554007c66977d5d_t.jpeg',
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "/about", // Assuming you have an About page
      },
      {
        name: "Services",
        link: "/portfolio", // Assuming you have a Services page
      },
      {
        name: "Contact Us",
        link: "/contact", // Assuming you have a Contact page
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        name: "CCTV & Video",
        link: "/portfolio", // Assuming you have a Help Center page
      },
      {
        name: "Access Control Systems",
        link: "/portfolio", // Assuming you have an portfolio page
      },
      {
        name: "Alarm Systems",
        link: "/portfolio", // Assuming you have an portfolio page
      },
      {
        name: "Fire Safety Systems",
        link: "/portfolio", // Assuming you have an FAQs page
      },
    ],
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];