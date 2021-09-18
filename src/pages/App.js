import React from "react";
import { global } from "../globals/global.css";
import Title from "../components/atoms/title/Title";
import DiscoverBtn from "../components/atoms/discoverBtn/discoverBtn";
import AboutSection from "../components/molecules/aboutSection/AboutSection";
import SkillsSection from "../components/molecules/skillsSection/SkillsSection";
import ProjectSection from "../components/molecules/projectsSection/ProjectSection";
import MobileHeader from "../components/organisms/MobileHeader/MobileHeader";
import WebHeader from "../components/organisms/WebHeader/WebHeader";
import ScrollBtn from "../components/atoms/scrollBtn/ScrollBtn";
import Footer from "../components/organisms/Footer/Footer";

const App = () => {
  return (
    <>
      <span id="homeSection">
        <WebHeader />
        <MobileHeader />
        <Title />
        <DiscoverBtn />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ScrollBtn />
        <Footer />
      </span>
    </>
  );
};

export default App;
