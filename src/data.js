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
    link: "https://github.com/MarianaK96/digital-clock",
    img: DigitalClock,
    about:
      "Using React, I created a retro-looking digital clock with an emphasis on a sleek, minimal design. This was a great opportunity for me to practice my CSS skills, as well as a new-found love for neumorphism.",
    siteLink: "https://mk-digital-clock.netlify.app/",
  },
  {
    name: "Conversation Starters",
    link: "https://github.com/MarianaK96/conversation-starters",
    img: ConversationCards,
    about:
      "If you're ever in need of some entertainment for a dinner party (that doesn't involve drinking games) then look no further than these cards, providing you with inspiration for tantalising conversation. All you have to do is pick a category, read out the card and let the fun begin.",
    siteLink: "https://mk-conversation-starters.netlify.app/",
  },
  {
    name: "Portfolio",
    link: "https://github.com/MarianaK96/portfolio",
    img: Portfolio,
    about:
      "My largest project yet, this was a great opportunity to test both my skills and my motivation resulting in my first portfolio that I am happy to say I am (a little) proud of. ",
  },
];
