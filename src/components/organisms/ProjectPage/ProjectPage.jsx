import React from "react";
import {
  SectionPadding,
  ParagraphWrapper,
  FooterWrapper,
  Underline,
  ProjectsTitle,
  ProjectImageWrapper,
  ProjectPaddingWrapper,
  IconsWrapper,
  SiteLink,
} from "./ProjectPageStyles";
import { Link } from "react-router-dom";
import GithubIcon from "../../../images/github.svg";

import { projectsData } from "../../../data";

const ProjectPage = ({ img, link, name, about, siteLink, index }) => {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <>
      <ProjectPaddingWrapper>
        <SectionPadding>
          <ProjectsTitle>{name}</ProjectsTitle>
          <ProjectImageWrapper>
            <img src={img} alt="" />
          </ProjectImageWrapper>

          {projectsData[index].hasOwnProperty("siteLink") && (
            <SiteLink href="" onClick={() => openLink(siteLink)}>
              Visit site
            </SiteLink>
          )}

          <ParagraphWrapper>
            <p>{about}</p>
          </ParagraphWrapper>

          <FooterWrapper>
            <Link to="/">Home</Link>
            <IconsWrapper onClick={() => openLink(link)}>
              <img src={GithubIcon} alt="" />
            </IconsWrapper>
          </FooterWrapper>
        </SectionPadding>
      </ProjectPaddingWrapper>
    </>
  );
};

export default ProjectPage;
