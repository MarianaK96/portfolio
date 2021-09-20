import React from "react";
import { TitleWrapper } from "../../components/molecules/SectionStyles.styles";
import {
  SectionPadding,
  ParagraphWrapper,
  FooterWrapper,
  Underline,
} from "./ProjectPageStyles";
import { PaddingWrapper } from "../../globals/global.styles";
import {
  IconsWrapper,
  ImageWrapper,
} from "../../components/molecules/projectsSection/ProjectSection.styles";
import GithubIcon from "../../images/github.svg";

const ProjectPage = ({ img, link }) => {
  return (
    <>
      <PaddingWrapper>
        <SectionPadding>
          <TitleWrapper>
            <h1>Project One</h1>
          </TitleWrapper>
          <ImageWrapper>
            <img src={img} alt="" />
          </ImageWrapper>
          <ParagraphWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              magnam officiis, deserunt animi unde eius illum autem voluptas
              numquam dolorum voluptates pariatur. Aspernatur hic eligendi
              blanditiis! Officiis repudiandae dolorum libero.
            </p>
          </ParagraphWrapper>
          <Underline></Underline>
          <FooterWrapper>
            <a href="#homeSection">Home</a>
            <IconsWrapper>
              <a href={link}>
                <img src={GithubIcon} alt="" />
              </a>
            </IconsWrapper>
          </FooterWrapper>
        </SectionPadding>
      </PaddingWrapper>
    </>
  );
};

export default ProjectPage;
