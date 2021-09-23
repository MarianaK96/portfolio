import React from "react";
import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles";
import { TitleWrapper } from "../SectionStyles.styles";
import {
  ImageWrapper,
  Project,
  ProjectTitle,
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
        <TitleWrapper>
          <h1 id="projectsSection">Projects</h1>
        </TitleWrapper>
        <ProjectWrapper>
          <Project>
            <ImageWrapper to="/project-one">
              <img
                src={DigitalClock}
                alt="a digital clock created using code"
              />
            </ImageWrapper>

            <ProjectTitle to="/project-one">Digital Clock</ProjectTitle>
          </Project>

          <Project>
            <ImageWrapper to="/project-two">
              <img
                src={ConversationCards}
                alt="a black card with 'conversation starter' written on it, on a white background"
              />
            </ImageWrapper>
            <ProjectTitle to="/project-two">Conversation Starters</ProjectTitle>
          </Project>

          <Project>
            <ImageWrapper to="/project-three">
              <img src={Portfolio} alt="a screenshot of this portfolio" />
            </ImageWrapper>
            <ProjectTitle to="/project-three">Portfolio</ProjectTitle>
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
