import React from "react";
import { PaddingTop, PaddingWrapper } from "../../../globals/global.styles";
import { ParagraphWrapper, TitleWrapper, SectionPadding } from "./about.styles";

const AboutMe = () => {
  return (
    <>
      <PaddingWrapper>
        <SectionPadding></SectionPadding>
        <TitleWrapper>
          <h1 id="aboutMeSection">About me</h1>
        </TitleWrapper>
        <ParagraphWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </ParagraphWrapper>
      </PaddingWrapper>
    </>
  );
};

export default AboutMe;
