import React from "react";
import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles";
import { TitleWrapper, ParagraphWrapper } from "../SectionStyles.styles";

const SkillsSection = () => {
  return (
    <>
      <PaddingTop />
      <PaddingWrapper>
        <TitleWrapper id="skillsSection" b>
          <h1>Skills</h1>
        </TitleWrapper>
        <ParagraphWrapper>
          <p>
            I am experienced in <b>Javascript</b>, <b>CSS</b> and <b>HTML5</b>.
            I generally work with <b>React</b> but have also used both
            <b> Next.js</b> and <b>Gatsby.js</b>.
          </p>
          <p>
            I am familiar with <b>Scrum</b> and <b>Agile</b> methodologies and
            used <b>JIRA</b> extensively in my previous role.
          </p>
        </ParagraphWrapper>
      </PaddingWrapper>
    </>
  );
};

export default SkillsSection;
