import React from "react";
import { global } from "../globals/global.css";
import Title from "../components/atoms/title/title";
import DiscoverBtn from "../components/atoms/discoverBtn/discoverBtn";
import AboutMe from "../components/atoms/about/about";
import Skills from "../components/atoms/skills/skillsSection";
import Projects from "../components/atoms/projects/projectSection";
import { Menu, Modal } from "../components/molecules/header/header";

const App = () => {
  return (
    <>
      <Menu />
      <Title />
      <DiscoverBtn />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
