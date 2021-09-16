import React from "react";

import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles";
import { TitleWrapper, ParagraphWrapper } from "../about/about.styles";
import {
  ImageWrapper,
  ProjectTitle,
  IconsWrapper,
} from "./projectSection.styles";

const Projects = () => {
  return (
    <>
      <PaddingWrapper>
        <PaddingTop />
        <TitleWrapper id="projectsSection">
          <h1>Projects</h1>
        </TitleWrapper>
        <ImageWrapper>
          <img
            src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image of code on a screen"
          />
        </ImageWrapper>
        <ProjectTitle>
          <a href="../../../pages/projectOne">Project Title</a>
        </ProjectTitle>

        <ImageWrapper>
          <img
            src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image of code on a screen"
          />
        </ImageWrapper>
        <ProjectTitle>
          <a href="../../../pages/projectOne">Project Title</a>
        </ProjectTitle>
      </PaddingWrapper>
    </>
  );
};

export default Projects;

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
