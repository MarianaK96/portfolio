import MailIcon from "../src/images/mail.svg";
import GitHubIcon from "../src/images/github.svg";
import LinkedInIcon from "../src/images/linkedin.svg";

import DigitalClock from "../src/images/clock-image.png";
import Portfolio from "../src/images/portfolio-image.png";
import ConversationCards from "../src/images/cards-image.png";

export const categories = [
  {
    category: "About",
    link: "#aboutMeSection",
  },
  {
    category: "Skills",
    link: "#skillsSection",
  },
  {
    category: "Projects",
    link: "#projectsSection",
  },
  {
    category: "Contact",
    link: "#contactSection",
  },
];

export const footerData = [
  {
    link: "mailto:stasiakmariana@gmail.com",
    icon: MailIcon,
  },
  {
    link: "https://github.com/MarianaK96",
    icon: GitHubIcon,
  },
  {
    link: "https://www.linkedin.com/in/mariana-koudela-437b09196/",
    icon: LinkedInIcon,
  },
];

export const projectsData = [
  {
    name: "Digital Clock",
    link: "https://github.com/MarianaK96/digitalClock",
    img: DigitalClock,
  },
  {
    name: "Conversation Starters",
    link: "https://github.com/MarianaK96/conversation-starters",
    img: ConversationCards,
  },
  {
    name: "Portfolio",
    link: "https://github.com/MarianaK96/portfolio",
    img: Portfolio,
  },
];
