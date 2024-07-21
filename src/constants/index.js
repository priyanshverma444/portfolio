import {
  p1,
  p2,
  p3,
  p4,
  p5,
  web,
  DevUp,
  Nexus,
  superstore360,
  Nexuspoint,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "CP Enthusiast",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML-CSS-JS",
    icon: p1,
  },
  {
    name: "MongoDB-ExpressJS-ReactJS-NodeJS",
    icon: p2,
  },
  {
    name: "Vite-Tailwind-Bootstrap",
    icon: p3,
  },
  {
    name: "Git-Github-VSCode-Postman",
    icon: p4,
  },
  {
    name: "C-CPP-Java-Python",
    icon: p5,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "DevUp",
    icon: DevUp,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Nexus",
    icon: Nexus,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Superstore-360",
    description:
      "Superstore-360 is a full-featured e-commerce web application with CRUD operations.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: superstore360,
    source_code_link: "https://github.com/priyanshverma444/superstore-360",
    live_link: "https://superstore360.vercel.app/",
  },
  {
    name: "Nexus",
    description:
      "Nexus provides a platform where students can connect, share, collaborate, and engage with various coding contests.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: Nexuspoint,
    source_code_link: "https://github.com/priyanshverma444/nexus-backend",
    live_link: "https://nexuspoint.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
