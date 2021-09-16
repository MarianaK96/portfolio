import React from "react";
import { TitleWrapper } from "../../components/atoms/about/about.styles";
import { ImageWrapper } from "../../components/atoms/projects/projectSection.styles";
import {
  SectionPadding,
  ParagraphWrapper,
  FooterWrapper,
  Underline,
} from "./projects.styles";
import { PaddingWrapper } from "../../globals/global.styles";
import { IconsWrapper } from "../../components/molecules/projects/projectSection.styles";
import GithubIcon from "../../images/github.svg";

const ProjectOnePage = () => {
  return (
    <>
      <PaddingWrapper>
        <SectionPadding>
          <TitleWrapper>
            <h1>Project One</h1>
          </TitleWrapper>
          <ImageWrapper>
            <img
              src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?cs=srgb&dl=pexels-lumn-167699.jpg&fm=jpg"
              alt=""
            />
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
            <a href="">Home</a>
            <IconsWrapper>
              <a href="https://github.com/MarianaK96">
                <img src={GithubIcon} alt="" />
              </a>
            </IconsWrapper>
          </FooterWrapper>
        </SectionPadding>
      </PaddingWrapper>
    </>
  );
};

export default ProjectOnePage;
