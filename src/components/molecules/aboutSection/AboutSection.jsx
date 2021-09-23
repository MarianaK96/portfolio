import React from "react";
import { PaddingTop, PaddingWrapper } from "../../../globals/global.styles";
import {
  ParagraphWrapper,
  TitleWrapper,
  SectionPadding,
} from "../SectionStyles.styles";

const AboutSection = () => {
  return (
    <>
      <PaddingWrapper>
        <SectionPadding></SectionPadding>
        <TitleWrapper id="aboutMeSection">
          <h1>About me</h1>
        </TitleWrapper>
        <ParagraphWrapper>
          <p>
            Having studied History at University, I then moved into a career in
            <b> Customer Success</b> and <b>User Research</b>.
          </p>
          <p>
            During this time I decided to switch paths and embark on a
            self-taught journey to web development where I have a keen interest
            in <b>design</b> and <b>user experience</b>.
          </p>
        </ParagraphWrapper>
      </PaddingWrapper>
    </>
  );
};

export default AboutSection;
