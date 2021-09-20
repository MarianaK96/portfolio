import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles";
import { TitleWrapper, ParagraphWrapper } from "../SectionStyles.styles";
import {
  ImageWrapper,
  ProjectTitle,
  Project,
  TestTitle,
  IconsWrapper,
  ProjectWrapper,
} from "./ProjectSection.styles";
import DigitalClock from "../../../images/clock-image.png";
import Portfolio from "../../../images/portfolio-image.png";
import ConversationCards from "../../../images/cards-image.png";

const ProjectSection = () => {
  return (
    <>
      <PaddingWrapper>
        <PaddingTop />
        <TitleWrapper id="projectsSection">
          <h1>Projects</h1>
        </TitleWrapper>
        <ProjectWrapper>
          <Project>
            <ImageWrapper>
              <img src={DigitalClock} alt="image of code on a screen" />
            </ImageWrapper>
            <TestTitle href="/Users/marianakoudela/Desktop/react_portfolio/src/pages/ProjectPage/ProjectPage.js">
              Digital Clock
            </TestTitle>
          </Project>

          <Project>
            <ImageWrapper>
              <img src={ConversationCards} alt="image of code on a screen" />
            </ImageWrapper>
            <TestTitle href="/Users/marianakoudela/Desktop/react_portfolio/src/ProjectPage.js">
              Conversation Starters
            </TestTitle>
          </Project>

          <Project>
            <ImageWrapper>
              <img src={Portfolio} alt="image of code on a screen" />
            </ImageWrapper>
            <TestTitle href="src/ProjectPage.js">Portfolio</TestTitle>
          </Project>
        </ProjectWrapper>
      </PaddingWrapper>
    </>
  );
};

export default ProjectSection;

// <IconsWrapper>
// <a href="https://github.com/MarianaK96">
//   <img src={GithubIcon} alt="" />
// </a>
// <img src={HelpIcon} alt="" />
// </IconsWrapper>
//         <IconsWrapper>
//         <a href="https://github.com/MarianaK96">
//           <img src={GithubIcon} alt="" />
//         </a>
//         <img src={HelpIcon} alt="" />
//       </IconsWrapper>
